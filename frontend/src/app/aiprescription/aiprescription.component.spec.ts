import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIPrescriptionComponent } from './aiprescription.component';

describe('AIPrescriptionCardComponent', () => {
  let component: AIPrescriptionComponent;
  let fixture: ComponentFixture<AIPrescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AIPrescriptionComponent],
    });
    fixture = TestBed.createComponent(AIPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
