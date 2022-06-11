import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unit } from '../../typings/meals.enums';
import { Ingredient, Meal, Source } from '../../typings/meals.interfaces';

const EMPTY_MEAL = {
  name: '',
  time: '',
  rating: '',
  ingredients: [] as Ingredient[],
  instructions: '',
  image: '',
  source: {
    name: '',
    page: ''
  } as Source,
  link: ''
}

@Component({
  selector: 'app-meal-form-dialog',
  templateUrl: './meal-form-dialog.component.html',
  styleUrls: ['./meal-form-dialog.component.scss']
})
export class MealFormDialogComponent implements OnInit {
  mealFormModel = this.meal || EMPTY_MEAL;
  title = this.mealFormModel?.name ? `Edit ${this.mealFormModel.name}` : 'Create New Meal'
  units = Object.values(Unit);

  constructor(@Inject(MAT_DIALOG_DATA) public meal: Meal) { }

  ngOnInit(): void {
  }

  addIngredient(): void {
    const newIngredient: Ingredient = {
      name: 'New ingredient',
      quantity: '',
      unit: Unit.None
    }
    
    this.mealFormModel.ingredients = [...this.mealFormModel.ingredients, newIngredient];

  }

}
