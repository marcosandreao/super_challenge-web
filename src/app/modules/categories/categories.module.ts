import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './list-category/list-category.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormCategoryComponent } from './form-category/form-category.component';


const routes: Routes = [
  {
    path: "",
    component: ListCategoryComponent,
  }
];

@NgModule({
  declarations: [
    ListCategoryComponent,
    FormCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
  ]
})
export class CategoriesModule { }
