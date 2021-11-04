import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
   imports: [
      CommonModule,
      MatGridListModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatButtonModule
   ],
   exports: [
      MatGridListModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatButtonModule
   ],
   providers: [
   ]
})

export class MaterialModule { }