import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './containers/meals/meals.component';
import { MealsRoutingModule } from './meals-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MealFormDialogComponent } from './components/meal-form-dialog/meal-form-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MealCardComponent } from './components/meal-card/meal-card.component';

@NgModule({
  declarations: [
    MealsComponent,
    MealFormDialogComponent,
    MealCardComponent
  ],
  imports: [
    CommonModule,
    MealsRoutingModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatTableModule,
    MatButtonModule,
    OverlayModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MealsModule { }
