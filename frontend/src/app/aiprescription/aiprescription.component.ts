import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
``;

@Component({
  selector: 'app-aiprescription',
  templateUrl: './aiprescription.component.html',
  styleUrls: ['./aiprescription.component.css'],
})
export class AIPrescriptionComponent {
  id: string | null = null;
  solution = {
    pathId: '7XwloZtxCO',
    sections: [
      {
        title: 'Regimenal Therapy 💆‍♂️',
        items: [
          'Steam inhalation (Inkibāb)',
          'Fomentation on chest (Takmīd)',
          'Oil massage on chest (Tadhīn)',
        ],
      },
      {
        title: 'Dietary Recommendations 🍉',
        items: [
          'Aghziya Murattiba for dry cough',
          'Goat milk for dry cough',
          'Mā’ al-Sha‘īr prepared with crabs',
          'Mā’ al-‘Asl',
        ],
      },
      {
        title: 'Dietary Restrictions 🚫',
        items: ['Aghziya Munaffikha', 'Aghziya Qābiza'],
      },
      {
        title: 'Prevention Strategies 🛡️',
        items: [
          'Excessive sleep to be avoided when cough is associated with coryza',
          'Regimens producing cold, heat, or roughness in the body to be avoided',
          'Drugs and diets producing roughness in trachea to be avoided',
          'Smoking to be avoided',
        ],
      },
    ],
  };
  loadingContent = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      //Todo: Make Backend Call for Solution
      this.loadingContent = true;

      setTimeout(() => {
        this.solution = {
          pathId: '7XwloZtxCO',
          sections: [
            {
              title: 'Regimenal Therapy 💆‍♂️',
              items: [
                'Steam inhalation (Inkibāb)',
                'Fomentation on chest (Takmīd)',
                'Oil massage on chest (Tadhīn)',
              ],
            },
            {
              title: 'Dietary Recommendations 🍉',
              items: [
                'Aghziya Murattiba for dry cough',
                'Goat milk for dry cough',
                'Mā’ al-Sha‘īr prepared with crabs',
                'Mā’ al-‘Asl',
              ],
            },
            {
              title: 'Dietary Restrictions 🚫',
              items: ['Aghziya Munaffikha', 'Aghziya Qābiza'],
            },
            {
              title: 'Prevention Strategies 🛡️',
              items: [
                'Excessive sleep to be avoided when cough is associated with coryza',
                'Regimens producing cold, heat, or roughness in the body to be avoided',
                'Drugs and diets producing roughness in trachea to be avoided',
                'Smoking to be avoided',
              ],
            },
          ],
        };
        this.loadingContent = false;
      }, 1000);
    });
  }
}
