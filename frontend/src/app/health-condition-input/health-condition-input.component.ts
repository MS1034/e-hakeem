import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-health-condition-input',
  templateUrl: './health-condition-input.component.html',
  styleUrls: ['./health-condition-input.component.css'],
})
export class HealthConditionInputComponent {
  @Output() promptSubmitted: EventEmitter<string> = new EventEmitter<string>();
  promptText: string = '';
  maxChars: number = 200;
  remainingChars: number = this.maxChars;
  placeHolder:string ="I've been experiencing a persistent cough for the past week. My throat also feels sore, and I have a slight fever.";

  onTextChanged(event: any) {
    this.promptText = event.target.value;
    if (this.promptText.length > this.maxChars) {
      this.promptText = this.promptText.slice(0, this.maxChars);
    }
    this.remainingChars = this.maxChars - this.promptText.length;
  }
  onFormSubmit() {
    console.log('this.promptText');
    console.log(this.promptText);

    if (this.promptText) {
      this.promptSubmitted.emit(this.promptText);
    }
    this.promptText = '';
  }
}
