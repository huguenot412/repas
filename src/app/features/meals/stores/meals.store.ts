import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";
import { Meal } from "../typings/meals.interfaces";

export interface MealsState {
    meals: Meal[]
}

@Injectable({
    providedIn: 'root'
})
export class MealsStore extends ComponentStore<MealsState> {
    constructor() {
        super({meals: []});
    }

    // Selectors

    readonly meals$: Observable<Meal[]> = this.select(state => state.meals);

    // Updaters

    readonly addMeal = this.updater((state, meal: Meal) => ({
        meals: [...state.meals, meal],
    }));
}