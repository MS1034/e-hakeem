import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mcq-component',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css'],
})
export class McqComponent {
  loadingQuestion = false;

  //Todo: Remove When Backend is connected
  questions: any = [
    {
      pathId: 1,
      questionId: 1,
      questionStatement: 'Is patient a smoker?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: 2 },
        { optionId: 2, optionStatement: 'No', nextQuestion: 2 },
      ],
    },
    {
      pathId: 1,
      questionId: 2,
      questionStatement: 'Has the patient smoked in the past?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: 4 },
        { optionId: 2, optionStatement: 'No', nextQuestion: 4 },
      ],
    },
    {
      pathId: 1,
      questionId: 3,
      questionStatement:
        'Has the patient been in contact with animals, dust, and soil?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: 5 },
        { optionId: 2, optionStatement: 'No', nextQuestion: 5 },
      ],
    },
    {
      pathId: 1,
      questionId: 4,
      questionStatement: 'Does anyone in the house have asthma or TB?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: 7 },
        { optionId: 2, optionStatement: 'No', nextQuestion: 8 },
      ],
    },
    {
      pathId: 1,
      questionId: 5,
      questionStatement: 'Cough diagnostic Question',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: 9 },
        { optionId: 2, optionStatement: 'No', nextQuestion: 9 },
      ],
    },
    {
      pathId: 1,
      questionId: 6,
      questionStatement: 'Cough is dry or produces sputum (phlegm)?',
      options: [
        { optionId: 1, optionStatement: 'Dry', nextQuestion: 6 },
        { optionId: 2, optionStatement: 'Produces sputum', nextQuestion: 10 },
      ],
    },
    {
      pathId: 1,
      questionId: 7,
      questionStatement: 'Does the cough come more during the day or at night?',
      options: [
        { optionId: 1, optionStatement: 'Day', nextQuestion: 3 },
        { optionId: 2, optionStatement: 'Night', nextQuestion: 3 },
      ],
    },
    {
      pathId: 1,
      questionId: 8,
      questionStatement:
        'Cough comes from some special environment such as cold, dust, etc.?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: null },
        { optionId: 2, optionStatement: 'No', nextQuestion: null },
      ],
    },
    {
      pathId: 1,
      questionId: 9,
      questionStatement: 'Is there pain in the chest when coughing?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: null },
        { optionId: 2, optionStatement: 'No', nextQuestion: null },
      ],
    },
    {
      pathId: 1,
      questionId: 10,
      questionStatement: 'Does a coughing fit start suddenly?',
      options: [
        { optionId: 1, optionStatement: 'Yes', nextQuestion: null },
        { optionId: 2, optionStatement: 'No', nextQuestion: null },
      ],
    },
  ];

  currentQuestion = this.questions[0];

  constructor(private router: Router) {}

  loadNextQuestion(option: any) {
    this.loadingQuestion = true;
    setTimeout(() => {
      const ques = this.questions.find(
        (question: { questionId: any }) =>
          question.questionId == option.nextQuestion
      );

      if (ques) {
        //Todo: Parse Method to get next question
        this.currentQuestion = ques;
      } else {
        //Todo: Navigate to solution if null
        
        // this.router.navigate(['/AI-Solution', wh]);
      }
      this.loadingQuestion = false;
    }, 1000);
  }
}
