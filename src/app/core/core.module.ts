import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    MatSnackBarModule,
  ],
  exports: [
    LayoutsModule
  ]
})
export class CoreModule { }
