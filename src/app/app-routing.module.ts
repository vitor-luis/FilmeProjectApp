import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmeComponent } from './filme/filme.component';
import { CreateFilmeComponent } from './filme/create-filme/create-filme.component';

export const ROUTES: Routes = [
  {path:'filmes', component: FilmeComponent},
  {path:'filmes/create', component: CreateFilmeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
