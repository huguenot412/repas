import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealFormDialogComponent } from './meal-form-dialog.component';

describe('MealFormDialogComponent', () => {
  let component: MealFormDialogComponent;
  let fixture: ComponentFixture<MealFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
