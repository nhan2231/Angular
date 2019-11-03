import { Component, OnInit } from '@angular/core';
import { QuestionService }from '../services/question.service'
import { ActivatedRoute } from '@angular/router'
import { makeRe } from 'minimatch';

@Component({
  selector: 'app-trac-nghiem',
  templateUrl: './trac-nghiem.component.html',
  styleUrls: ['./trac-nghiem.component.css']
})
export class TracNghiemComponent implements OnInit {
  page = 1;
  bringOn = 1;
  loggedIn: boolean = false

  user: any
  listOfSubject : any
  idOfSubject: number
  subjectsName: any

  questionLength: number
  questions: any
  answerSheet = []
  rightAnswer = []

  constructor(private route: ActivatedRoute, private questionService: QuestionService) { 

  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.idOfSubject = +param.get('num')
    })

    this.loggedIn = this.questionService.loggedIn
    this.user = this.questionService.user

    this.questionService.getItems().subscribe(x => {
      this.listOfSubject = x
      this.questions = this.listOfSubject[this.idOfSubject]
      this.questionLength = this.questions.length
      this.questions.forEach(x => this.answerSheet.push({ quizId: x.Id, answerId: 0 }))
      this.questions.forEach(x => this.rightAnswer.push({ quizId: x.Id, answerId: x.AnswerId }))
    })

    this.questionService.getSubjects().subscribe(x => {
      this.subjectsName = x
    })

    var minute = 30;
    var second = 0;
    
    window.clearInterval(localStorage['idleInterval'])
    var count = setInterval(function () {
      if (minute == 0 && second == 0) {
        console.log(this.outOfTime)
        document.getElementById('onTime').style.display = 'none'
        document.getElementById('outTime').style.visibility = 'visible'
        clearInterval(count)
        window.confirm('Het gio lam bai')
      }
      else {
        second -= 1
        if (second < 0) {
          minute -= 1;
          second = 59;
        }
        document.getElementById('minute').innerHTML = minute + 'm: ' + second + 's';
      }
    }, 1000)
    window.localStorage['idleInterval'] = count;
  }



  nextPage() {
    if (this.questionLength / this.bringOn > this.page) {
      this.page++;
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  first() {
    this.page = 1
  }

  last() {
    let v = this.questionLength % this.bringOn;
    let t = this.questionLength / this.bringOn;
    console.log(v);
    console.log(t);
    if (v == 0) {
      this.page = Math.floor(t);
    }
    else {
      this.page = Math.floor(t);
      this.page += 1;
    }
  }

  mark() {
    let mark = 0
    for (let i = 0; i < this.rightAnswer.length; i++) {
      if (this.answerSheet[i].answerId == this.rightAnswer[i].answerId) {
        mark++;
      }
    }
    return mark
  }

  check(choose, p) {
    this.answerSheet[p - 1].answerId = choose
  }

  NopBai() {
      document.getElementById('onTime').style.display = 'none'
      document.getElementById('outTime').style.visibility = 'visible'
      window.clearInterval(localStorage['idleInterval'])
  }

  LuuDiem(){
    this.questionService.saveMark(this.user.key, this.mark() + '/' + this.questionLength)
    this.questionService.user.marks = this.mark() 
    alert('Đã lưu điểm của bạn')
  }

  // changeSubject(id){
  //   if(id !== this.idOfSubject){
  //     if(window.confirm('Ban co chac la muon doi mon thi')){
  //       this.idOfSubject = id
  //       this.questions = this.listOfSubject[this.idOfSubject]
  //       this.questionLength = this.questions.length
  //       this.questions.forEach(x => this.answerSheet.push({ quizId: x.Id, answerId: 0 }))
  //       this.questions.forEach(x => this.rightAnswer.push({ quizId: x.Id, answerId: x.AnswerId }))
  //       this.page = 1  
  //     }
  //   }
  //   else{
  //     alert('Ban dang thi mon nay')
  //   }
  // }
  
}

