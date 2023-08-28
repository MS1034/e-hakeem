import { Injectable } from '@angular/core';
import compromise from 'compromise';


@Injectable({
  providedIn: 'root',
})
export class NerService {
  constructor() {}
  identifyKeywords(userPrompt: string): {
    symptoms: string[];
    healthKeywords: string[];
  } {
    const doc = compromise(userPrompt);
    const symptoms = doc.match('#Symptom').out('array');

    const healthKeywords = doc.match('#HealthKeyword').out('array');

    return { symptoms, healthKeywords };
  }
}
