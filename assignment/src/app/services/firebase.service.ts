import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // listRef : AngularFireList<any>
  // list: Observable<any[]>

  // constructor(private db: AngularFireDatabase) { }

  // // Lay list cac bai quizz
  // GetBookList() {
  //   this.listRef = this.db.list('quizzes');
  //   return this.listRef
  // }
  // GetBook(){
    
  // }
}
