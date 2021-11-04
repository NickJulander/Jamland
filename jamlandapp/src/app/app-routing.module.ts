import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { ScaleLibraryComponent } from './components/scale-library/scale-library.component';
import { ChordLibraryComponent } from './components/chord-library/chord-library.component';
import { MyJamComponent } from './components/my-jam/my-jam.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
  ,{ path: 'library', component: LibraryComponent }
  ,{ path: 'myJam', component: MyJamComponent }
  ,{ path: 'scaleLibrary', component: ScaleLibraryComponent }
  ,{ path: 'chordLibrary', component: ChordLibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
