import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MealFormDialogComponent } from '../../components/meal-form-dialog/meal-form-dialog.component';
import { MealsService } from '../../services/meals.service';
import { MealsStore } from '../../stores/meals.store';
import { Meal } from '../../typings/meals.interfaces';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
  providers: [MatDialog],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealsComponent implements OnInit {

  meals$ = this.mealsStore.meals$;

  constructor(
    private dialog: MatDialog,
    private readonly mealsStore: MealsStore,
    private readonly mealsService: MealsService,
  ) { }

  ngOnInit(): void {
    const meals = this.mealsService.getMeals();
    this.mealsStore.setState({meals});
  }

  openDialog(meal?: Meal): void {
    const dialogRef = this.dialog.open(MealFormDialogComponent, { data: meal });
  }
}
