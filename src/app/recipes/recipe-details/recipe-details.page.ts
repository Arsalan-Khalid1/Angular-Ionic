import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../recipes.service';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  loadedRecipe: RecipeModel;

  constructor(private activatedRoute:  ActivatedRoute, private recipesService: RecipesService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId'))
      {
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDelete(){
    this.recipesService?.deleteRecipe(this?.loadedRecipe?.id);
    this.router.navigate(['/recipes']);
  };

}
