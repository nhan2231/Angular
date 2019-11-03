import { Component, OnInit } from '@angular/core';
import { Student } from '../services/Student'
import { QuestionService } from '../services/question.service'
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms'
import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {
  form: FormGroup
  submitted = false
  studentList: Student[]
  form2 = {
    username: '',
    email: ''
  }

  success = false
  constructor(private service: QuestionService, private formBuilder: FormBuilder, private fb: AngularFireDatabase,) { }

  ngOnInit() {
    this.service.getUser().subscribe(user => {
      this.studentList = user
    })

    this.form = this.formBuilder.group({
      username: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      fullname: ['', [
        Validators.required,
      ]],
      gender: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      birthday: ['', [
        Validators.required
      ]],
      marks: 0,
      schoolfee: 0,
    })

  }

  // checkPass(){
  //   let x = document.forms['myForm']['c-password'].value
  //   let y = document.forms['myForm']['password'].value
  //   if(y === ''){
  //     x === ''
  //     return true
  //   }
  //   else if(x !== y){
  //     return false
  //   }
  //   return true
  // }

  signUp(name, email) {
    if (this.checkName(name)) {
      alert('Ten dang nhap nay da duoc su dung')
    }
    else {
      if (this.checkEmail(email)) {
        alert('Email nay da duoc su dung')
      }
      else {
        const value = this.form.value
        try {
          this.fb.list('student').push(value)
          this.success = true
        }
        catch (e) {
          console.log(e)
        }
      }
    }
  }

  checkName(name) {
    let i = false
    this.studentList.forEach(x => {
      if (name == x.username) {
        console.log(name)
        i = true
      }
    })
    return i
  }

  checkEmail(email) {
    let i = false
    this.studentList.forEach(x => {
      if (email == x.email) {
        console.log(email)
        i = true
      }
    })
    return i
  }

  get username() {
    return this.form.get('username')
  }

  get email() {
    return this.form.get('email')
  }

  get fullname() {
    return this.form.get('fullname')
  }

  get password() {
    return this.form.get('password')
  }

  get birthday() {
    return this.form.get('birthday')
  }

  get gender() {
    return this.form.get('gender')
  }

}
