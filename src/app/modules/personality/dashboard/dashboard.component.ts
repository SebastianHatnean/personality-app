import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/services/data.service';
// import * as myJson from '../../../../assets/data.json';
import swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private dataService: DataService) {}

  questionsAnswers;
  blurData = true;
  finalAnswers = [];

  ngOnInit(): void {
    this.dataService.getAll().subscribe((response) => {
      this.questionsAnswers = response.questions;
    });
  }

  clickedAns(answer, question) {
    this.finalAnswers.indexOf(answer) === -1
      ? this.finalAnswers.push(answer)
      : console.log('This item already exists');

    console.log(this.finalAnswers);

    this.toggleActiveAnswer(answer, question);
  }

  toggleActiveAnswer(answer, question) {
    for (const element of question.answers) {
      element.active = false;
    }
    answer.active = true;
  }

  beginTest() {
    this.blurData = false;
  }

  submit() {
    const finalAnswers = this.finalAnswers.filter(
      (element) => element.active === true
    );
    console.log(finalAnswers);
    const arrayOfScore = finalAnswers
      .map((item) => item.score)
      .reduce((prev, curr) => prev + curr, 0);
    console.log('arrayOfScore', arrayOfScore);
    let result = '';
    if (arrayOfScore > 25) {
      result = `Result: You're more of an extrovert`;
    } else {
      result = `Result: You're more of an introvert`;
    }
    swal.fire(`Great! Your score is: ${arrayOfScore}`, `${result}`, 'success');
  }
}
