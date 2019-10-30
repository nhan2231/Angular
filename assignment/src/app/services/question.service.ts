import { Injectable } from '@angular/core';
// import {Question} from '../models/services'
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  // questionsCollection: AngularFirestoreCollection<any>
  questions: Observable<any[]>
  subjects: Observable<any[]>
  subjectName: Observable<any[]>
  constructor(private db: AngularFireDatabase) { 
    this.subjects = db.list('subject').valueChanges()  
    this.questions = db.list('quizzes').valueChanges()
  }

  getItems(){
    return this.questions
  }

  getSubjects(){
    return this.subjects
  }

}
