import { Component } from '@angular/core';
import { NerService } from '../service/ner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnosis-page',
  templateUrl: './diagnosis-page.component.html',
  styleUrls: ['./diagnosis-page.component.css'],
})
export class DiagnosisPageComponent {
  constructor(private ner: NerService, private router: Router) {}
  handlePromptSubmitted($event: any) {
    // alert(JSON.stringify(this.ner.identifyKeywords($event)));
    const pathId = '7XwloZtxCO';
    this.router.navigate(['/ai', pathId]);
  }
}
