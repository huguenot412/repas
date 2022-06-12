import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meal } from '../../typings/meals.interfaces';
import { MealFormDialogComponent } from '../meal-form-dialog/meal-form-dialog.component';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss']
})
export class MealCardComponent implements OnInit {
  @Input()
  meal!: Meal;
  displayedColumns = ['name', 'amount'];

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  openDialog(meal?: Meal): void {
    const dialogRef = this.dialog.open(MealFormDialogComponent, { data: meal });
  }

}
