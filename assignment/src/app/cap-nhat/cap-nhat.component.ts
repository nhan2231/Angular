import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service'
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms'

@Component({
  selector: 'app-cap-nhat',
  templateUrl: './cap-nhat.component.html',
  styleUrls: ['./cap-nhat.component.css']
})
export class CapNhatComponent implements OnInit {
  form = {
    email: '',
    fullname:'',
    gender: true,
    birthday: new Date(),
  }
  user: any

  constructor(private service: QuestionService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = this.service.user
    this.form.fullname = this.user.fullname
    this.form.email = this.user.email
    this.form.birthday = this.user.birthday
    this.form.gender = this.user.gender
  }

  changeInfo(){
    this.service.updateInfo(this.user.key, this.form.email, this.form.fullname, this.form.gender, this.form.birthday)
    this.service.user.fullname = this.form.fullname
    this.service.user.email = this.form.email
    this.service.user.birthday = this.form.birthday
    this.service.user.gender = this.form.gender
    alert('Đã cập nhật dữ liệu mới của bạn')
  }

}
