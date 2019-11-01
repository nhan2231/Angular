import { Injectable } from '@angular/core';
// import {Question} from '../models/services'
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  // questionsCollection: AngularFirestoreCollection<any>
  user: any
  loggedIn: boolean = false
  questions: Observable<any[]>
  subjects: Observable<any[]>
  subjectName: Observable<any[]>
  studentList: Observable<any[]>
  keys: Observable<any[]>

  constructor(private db: AngularFireDatabase) {
    this.subjects = db.list('subject').valueChanges()
    this.questions = db.list('quizzes').valueChanges()
    this.studentList = db.list('student').valueChanges()
    this.keys = db.list('student').snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    )
  }

  getItems() {
    return this.questions
  }

  getSubjects() {
    return this.subjects
  }

  getUser() {
    return this.studentList
  }

  getUserAndKeys() {
    return this.keys
  }

  isLoggedIn(user) {
    this.user = user;
    // localStorage.setItem('user',JSON.stringify(this.user))
    this.loggedIn = true
  }

  updatePassword(key, pass) {
    const itemsRef = this.db.list('student');
    itemsRef.update(key, { password: pass });
  }

  logOut() {
    this.user = null;
    // localStorage.removeItem('user')
    this.loggedIn = false
  }
}
