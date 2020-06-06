import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pelicula/:id', component: PeliculaComponent},
  {path: 'query/:query', component: HomeComponent},
  {path: 'query/:query/pelicula/:id', component: PeliculaComponent},
  {path: 'categorias/:categoria', component: HomeComponent},
  {path: 'categorias/best/:year', component: HomeComponent},
  {path: 'categorias/:categoria/pelicula/:id', component: PeliculaComponent},
  {path: 'categorias/best/:year/pelicula/:id', component: PeliculaComponent},
  {path: 'pelicula/:id', component: PeliculaComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
