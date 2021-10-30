import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { MainComponent } from './components/main.component';
 
const routes: Routes = [
  // { path: '', component: MainComponent }
  { path: '', component: HomeComponent }
  ,{ path: 'library', component: LibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
