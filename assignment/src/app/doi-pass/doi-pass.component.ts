import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service'

@Component({
  selector: 'app-doi-pass',
  templateUrl: './doi-pass.component.html',
  styleUrls: ['./doi-pass.component.css']
})
export class DoiPassComponent implements OnInit {
  user: any
  password: ''
  new_password: ''
  
  constructor(private service: QuestionService) { }
  
  ngOnInit() {
    this.user = this.service.user
    console.log(this.user.key)
  }

  changePass(){
    if(this.password !== this.user.password){
      alert ('mat khau sai')
    }
    else {
      this.service.updatePassword(this.user.key, this.new_password)
      alert('oh yeah')
    }
  }

}
