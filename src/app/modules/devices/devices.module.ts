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
import { FormDeviceComponent } from './form-device/form-device.component';
import { CategoryResolver } from './form-device/categories.resolver';
import { MatSelectModule } from '@angular/material/select';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { MatRadioModule } from '@angular/material/radio';

const routes: Routes = [
  {
    path: "",
    component: ListDevicesComponent,
  },
  {
    path: "form",
    component: FormDeviceComponent,
    resolve: {
      categories: CategoryResolver
    }
  },

];


@NgModule({
  declarations: [
    ListDevicesComponent,
    FormDeviceComponent
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
    MatSelectModule,
    NgxMatColorPickerModule,
    MatRadioModule,
  ],
  providers: [
    CategoryResolver,
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ]
})
export class DevicesModule { }
