import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParseService } from '../service/parse.service';
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
        title: 'Regimenal Therapy ',
        items: [
          'Steam inhalation (Inkibāb)',
          'Fomentation on chest (Takmīd)',
          'Oil massage on chest (Tadhīn)',
        ],
        imgSource: '/assets/R.svg',
      },
      {
        title: 'Dietary Recommendations',
        items: [
          'Aghziya Murattiba for dry cough',
          'Goat milk for dry cough',
          'Mā’ al-Sha‘īr prepared with crabs',
          'Mā’ al-‘Asl',
        ],
        imgSource: '/assets/R.svg',
      },
      {
        title: 'Dietary Restrictions ',
        items: ['Aghziya Munaffikha', 'Aghziya Qābiza'],
        imgSource: '/assets/R.svg',
      },
      {
        title: 'Prevention Strategies',
        items: [
          'Excessive sleep to be avoided when cough is associated with coryza',
          'Regimens producing cold, heat, or roughness in the body to be avoided',
          'Drugs and diets producing roughness in trachea to be avoided',
          'Smoking to be avoided',
        ],
        imgSource: '/assets/R.svg',
      },
    ],
  };
  loadingContent = false;

  constructor(private route: ActivatedRoute, private parse: ParseService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      //Todo: Make Backend Call for Solution
      this.loadingContent = true;

      setTimeout(async () => {
        if (this.id) {
          const originalData = await this.parse.getTreatment(this.id);
          this.solution = {
            pathId: originalData.get('pathId').get('objectId'), // Get the objectId from the pointer
            sections: [
              {
                title: 'Regimenal Therapy',
                items: originalData
                  .get('regimenalTherapy')
                  .split('|')
                  .filter((item: string) => item.trim() !== ''),
                imgSource: '/assets/R.svg',
              },
              {
                title: 'Prevention Strategies',
                items: originalData
                  .get('preventionStrategies')
                  .split('|')
                  .map((item: string) => item.trim()),
                imgSource: '/assets/Fighting against Coronavirus-rafiki.svg',
              },
              {
                title: 'Dietary Recommendations',
                items: originalData
                  .get('dietaryRecommendations')
                  .split('|')
                  .map((item: string) => item.trim()),
                imgSource: '/assets/Boost your inmune system-bro.svg',
              },
              {
                title: 'Dietary Restrictions',
                items: originalData
                  .get('dietaryRestrictions')
                  .split('|')
                  .map((item: string) => item.trim()),
                imgSource: '/assets/7985389.jpg',
              },
            ],
          };
        }
        this.loadingContent = false;
      }, 1000);
    });
  }
}
