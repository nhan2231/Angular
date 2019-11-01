import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service'
import { Router } from '@angular/router'
import { Student } from '../services/Student'

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {

  form = {
    username: '',
    email: '',
    fullname:'',
    gender: true,
    password: '',
    birthday: new Date(),
    marks: 0,
    schoolfee: 0
  }

  studentList: Student[]

  constructor(private service: QuestionService, private router: Router) { }

  ngOnInit() {
    this.service.getUserAndKeys().subscribe(user => {
      this.studentList = user
      console.log(this.studentList)
    })
  }

  signIn(userName, password){
    let i = false
    this.studentList.forEach(x => {
      if(x.username === userName){
        if(x.password === password){
          const user = x
          i = true
          this.service.isLoggedIn(user)
          console.log(this.service.user)
          // this.router.navigate(['danhMuc'])
        }
      }
    })
    if(!i){alert('sai mk hoac ten dang nhap')}
  }
  


}
