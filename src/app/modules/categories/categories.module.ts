import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './list-category/list-category.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormCategoryComponent } from './form-category/form-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const routes: Routes = [
  {
    path: "",
    component: ListCategoryComponent,
  },
  {
    path: "form",
    component: FormCategoryComponent,
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class CategoriesModule { }
