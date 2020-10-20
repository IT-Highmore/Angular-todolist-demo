import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './btn/btn.component';

@NgModule({
  declarations: [NavComponent, BtnComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NavComponent,BtnComponent]
})
export class LayoutModule { }
