import { Component, Input } from '@angular/core';
import { Location } from '@angular/common'; // Import Location service

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @Input() step: number = 1;

  constructor(private location: Location) {} // Inject the Location service

  goBack() {
    this.location.back();
  }
}
