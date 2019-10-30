import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service'
import { NgxPaginationModule } from 'ngx-pagination'

@Component({
    selector: 'app-danh-muc',
    templateUrl: './danh-muc.component.html',
    styleUrls: ['./danh-muc.component.css']
})
export class DanhMucComponent implements OnInit {

    lastPage: number
    p: number = 1
    list: any
    listB: any

    constructor(private questionService: QuestionService) { }

    ngOnInit() {
        // this.fb.GetBookList().snapshotChanges().subscribe(quest => {
        //     quest.forEach(item => {
        //         let a = item.payload.toJSON()
        //         this.quizzes.push(a)
        //     })
        // })
        this.questionService.getSubjects().subscribe(res => {
            this.list = res
            this.lastPage = this.findLastPage()
        })
    }

    first() {
        this.p = 1;
    }

    next() {
        if (this.p < this.lastPage) {
            this.p += 1
        }
    }

    back() {
        if (this.p > 1) {
            this.p -= 1
        }
    }

    last() {
        this.p = this.lastPage
    }

    findLastPage() {
        if ((this.list.length % 4) > 0) {
            return Math.floor((this.list.length / 4) + 1)
        }
        else {
            return Math.floor((this.list.length / 4))
        }
    }

    // getItems(){
    //     this.questionService.getItems().subscribe(res =>{
    //         this.questionsList = res
    //     })}

}
