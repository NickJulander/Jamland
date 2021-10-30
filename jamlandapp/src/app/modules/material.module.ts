import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
   imports: [
      CommonModule,
      MatGridListModule,
      MatToolbarModule
   ],
   exports: [
      MatGridListModule,
      MatToolbarModule
   ],
   providers: [
   ]
})

export class MaterialModule { }