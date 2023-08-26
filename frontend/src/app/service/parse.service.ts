import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root',
})
export class ParseService {
  constructor() {
    Parse.initialize('myAppId', 'myMasterKey');
  }
  async getFirstQuestion(pathId: String) {
    const params = {
      pathId: pathId,
    };
    try {
      console.log(Parse.serverURL);
      const result = await Parse.Cloud.run('getFirstQuestion', params);
      return result;
    } catch (error) {
      console.log('Error calling getFirstQuestion: ' + error);
      throw error;
    }
  }

  async getNextQuestion(questionId: String, pathId: String) {
    try {
      const result = await Parse.Cloud.run('getNextQuestion', {
        questionId: questionId,
        pathId: pathId,
      });
      return result;
    } catch (error) {
      console.log('Error calling getNextQuestion: ' + error);
    }
  }
  async getTreatment(pathId: String) {
    try {
      const result = await Parse.Cloud.run('getTreatment', { pathId: pathId });
      return result;
    } catch (error) {
      throw new Error('Error calling getTreatment: ' + error);
    }
  }
}
