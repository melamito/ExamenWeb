import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { QuejasComponent } from './components/quejas/quejas.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'libros',component:BooksComponent},
  {path:'quejas',component:QuejasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
