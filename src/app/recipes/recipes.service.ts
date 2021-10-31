/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import {RecipeModel} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: RecipeModel[] = [
    {
      id: 'r1',
      title: 'Ham Burger',
      imageUrl:
        'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlZiUyMGJ1cmdlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      ingredients: ['Beef patty', 'Iceberg', 'Cheese', 'Mushrooms'],
    },
    {
      id: 'r2',
      title: 'Chicken Burger',
      imageUrl:
        'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlZiUyMGJ1cmdlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      ingredients: ['Beef patty', 'Iceberg', 'Cheese', 'Mushrooms'],
    },
    {
      id: 'r3',
      title: 'Fish Burger',
      imageUrl:
        'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlZiUyMGJ1cmdlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      ingredients: ['Beef patty', 'Iceberg', 'Cheese', 'Mushrooms'],
    },
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  };

  getRecipe(recipeId: string){
    return {
      ...this.recipes?.find(recipe => recipe?.id === recipeId)
    };
  };

  deleteRecipe(recipeId: string){
     this.recipes = this.recipes?.filter(recipe => recipe?.id !== recipeId);
  };
};
