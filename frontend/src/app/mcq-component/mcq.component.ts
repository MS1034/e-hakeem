import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ParseService } from '../service/parse.service';

@Component({
  selector: 'app-mcq-component',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css'],
})
export class McqComponent {
  loadingQuestion = false;
  pathId: string | null = null;
  //Todo: Remove When Backend is connected
  questions: any = [
    {
      pathId: '1',
      questionId: '1',
      questionStatement: 'Is patient a smoker?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: '2' },
        { optionId: 2, optionStatement: 'No', nextQuestion: '2' },
      ],
    },
    {
      pathId: '1',
      questionId: '2',
      questionStatement: 'Has the patient smoked in the past?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: '4' },
        { optionId: 2, optionStatement: 'No', nextQuestion: '4' },
      ],
    },
    {
      pathId: '1',
      questionId: '3',
      questionStatement:
        'Has the patient been in contact with animals, dust, and soil?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: '5' },
        { optionId: 2, optionStatement: 'No', nextQuestion: '5' },
      ],
    },
    {
      pathId: '1',
      questionId: '4',
      questionStatement: 'Does anyone in the house have asthma or TB?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: '7' },
        { optionId: 2, optionStatement: 'No', nextQuestion: '8' },
      ],
    },
    {
      pathId: '1',
      questionId: '6',
      questionStatement: 'Cough is dry or produces sputum (phlegm)?',
      options: [
        { optionId: 1, optionStatement: 'Dry', nextQuestion: '6' },
        { optionId: 2, optionStatement: 'Produces sputum', nextQuestion: '10' },
      ],
    },
    {
      pathId: '1',
      questionId: '7',
      questionStatement: 'Does the cough come more during the day or at night?',
      options: [
        { optionId: 1, optionStatement: 'Day', nextQuestion: '3' },
        { optionId: 2, optionStatement: 'Night', nextQuestion: '3' },
      ],
    },
    {
      pathId: '1',
      questionId: '8',
      questionStatement:
        'Cough comes from some special environment such as cold, dust, etc.?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: null },
        { optionId: 2, optionStatement: 'No', nextQuestion: null },
      ],
    },
    {
      pathId: '1',
      questionId: '9',
      questionStatement: 'Is there pain in the chest when coughing?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: null },
        { optionId: 2, optionStatement: 'No', nextQuestion: null },
      ],
    },
    {
      pathId: '1',
      questionId: ' 0',
      questionStatement: 'Does a coughing fit start suddenly?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: null },
        { optionId: 2, optionStatement: 'No', nextQuestion: null },
      ],
    },
  ];
  currentQuestion: any;
  constructor(
    private router: Router,
    private service: ParseService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params) => {
      this.pathId = params.get('id');
      this.loadingQuestion = true;
      if (this.pathId != null) {
        this.currentQuestion = await this.service.getFirstQuestion(this.pathId);
      }
      this.loadingQuestion = false;
      //Todo: Handle if there is no pathId
    });
  }

  async loadNextQuestion(option: any) {
    this.loadingQuestion = true;
    const nextQuestionId = option.nextQuestionId;

    if (this.pathId && nextQuestionId) {
      console.log("nextQuestionId");
      console.log(nextQuestionId);
      this.currentQuestion = await this.service.getNextQuestion(
        nextQuestionId,
        this.pathId
      );

    } else if (this.pathId) {
      this.router.navigate(['/ai-prescription', this.pathId]);
    } else {
      //Todo: Handle if there is no pathId
    }
    this.loadingQuestion = false;
  }
}
