import { Unit } from "./meals.enums";

export interface Ingredient {
    name: string,
    amount: string
}

export interface Source {
    name: string,
    page: string
}

export interface Meal {
    name: string,
    time: string,
    rating: string,
    ingredients: Ingredient[],
    instructions: string,
    image: string,
    source: Source,
    link: string
}