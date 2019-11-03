import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  success = false
  user: any
  constructor(private service: QuestionService) { }

  ngOnInit() {
    this.success = this.service.loggedIn
    this.user = this.service.user
  }

  gender(bool){
    if(bool){
      return 'Nam'
    }
    else return 'Nữ'
  }

}
