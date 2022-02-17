import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MENU } from './core/constants';
import { CharacterComponent } from './pages/character/character.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: MENU.home, pathMatch: 'full' },
  { path: MENU.home, component: HomeComponent },
  { path: `${MENU.character}/:id`, component: CharacterComponent },
  { path: MENU['not-found'], component: NotFoundComponent },
  { path: '**', redirectTo: MENU['not-found'] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
