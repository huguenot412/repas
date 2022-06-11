import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealsComponent } from './features/meals/containers/meals/meals.component';

const routes: Routes = [
  {
    path: '', component: MealsComponent,
    loadChildren: () => import('./features/meals/meals.module').then(m => m.MealsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
