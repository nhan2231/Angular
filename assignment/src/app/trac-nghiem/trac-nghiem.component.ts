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

  listOfSubject : any
  idOfSubject: number
  subjectName: string

  questions: any
  answerSheet = []
  rightAnswer = []

  constructor(private route: ActivatedRoute, private service: QuestionService) { 

  }

  ngOnInit() {

    this.route.paramMap.subscribe(param => {
      this.idOfSubject = +param.get('num')
    })
    console.log(this.idOfSubject)
    this.service.getSubjects().subscribe(x => {
      this.listOfSubject = x
    })
    setTimeout(function(){alert(this.listOfSubject)},2000)
    this.subjectName = this.listOfSubject.find(x => x.num == this.idOfSubject)

    this.service.getTheSubject(this.subjectName).subscribe(x => {
      this.questions = x
    })

    // var minute = 30;
    // var second = 0;
    // var count = setInterval(function () {
    //   if (minute == 0 && second == 0) {
    //     console.log(this.outOfTime)
    //     document.getElementById('onTime').style.display = 'none'
    //     document.getElementById('outTime').style.visibility = 'visible'
    //     clearInterval(count)
    //     window.confirm('Het gio lam bai')
    //   }
    //   else {
    //     second -= 1
    //     if (second < 0) {
    //       minute -= 1;
    //       second = 59;
    //     }
    //     document.getElementById('minute').innerHTML = minute + 'm: ' + second + 's';
    //   }
    // }, 1000);

    
    // this.questions = this.service.getItems()
    // // this.questions.forEach(x => this.answerSheet.push({ quizId: x.Id, answerId: 0 }))
    // console.log(this.questions)
  }
  nextPage() {
    if (this.questions.length / this.bringOn > this.page) {
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
    let v = this.questions.length % this.bringOn;
    let t = this.questions.length / this.bringOn;
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
    this.questions.forEach(x => this.rightAnswer.push({ quizId: x.Id, answerId: x.AnswerId }))
    for (let i = 0; i < this.rightAnswer.length; i++) {
      if (this.answerSheet[i].answerId == this.rightAnswer[i].answerId) {
        mark++;
      }
    }
    this.rightAnswer = []
    return mark
  }

  check(choose, p) {
    this.answerSheet[p - 1].answerId = choose
  }

  NopBai() {
    const nop = window.confirm('ban co chac la muon nop bai')
    if (nop == true) {
      document.getElementById('onTime').style.display = 'none'
      document.getElementById('outTime').style.visibility = 'visible'
    }
  }

}

