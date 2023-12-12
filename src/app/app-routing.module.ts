import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common' ;
import {CatsComponent} from "./cats/cats.component" ;
import {DogsComponent} from "./dogs/dogs.component" ;
import {CatDetailsComponent} from './cat-details/cat-details.component' ;
import { CatEditComponent } from './cat-edit/cat-edit.component';

const routes: Routes = [
  { path : 'cats' , component : CatsComponent},
{ path : 'dogs' , component : DogsComponent},
{ path : '' , redirectTo : '/cats' , pathMatch : 'full' },
{ path : 'details/:id' , component : CatDetailsComponent},
{ path : 'edit/:id' , component : CatEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
 
  exports: [RouterModule],
  declarations : []
})

export class AppRoutingModule { }
