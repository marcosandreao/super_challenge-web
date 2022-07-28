import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDevicesComponent } from './list-devices/list-devices.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: "",
    component: ListDevicesComponent,
  },

];


@NgModule({
  declarations: [
    ListDevicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ]
})
export class DevicesModule { }
