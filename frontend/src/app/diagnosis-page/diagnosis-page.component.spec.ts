import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisPageComponent } from './diagnosis-page.component';

describe('DiagnosisPageComponent', () => {
  let component: DiagnosisPageComponent;
  let fixture: ComponentFixture<DiagnosisPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisPageComponent]
    });
    fixture = TestBed.createComponent(DiagnosisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
