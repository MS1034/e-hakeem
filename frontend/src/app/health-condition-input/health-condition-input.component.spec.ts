import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthConditionInputComponent } from './health-condition-input.component';

describe('HealthConditionInputComponent', () => {
  let component: HealthConditionInputComponent;
  let fixture: ComponentFixture<HealthConditionInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthConditionInputComponent]
    });
    fixture = TestBed.createComponent(HealthConditionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
