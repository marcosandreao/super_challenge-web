import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/models/category';
import { DeviceService } from 'src/app/core/services/device.service';

@Component({
  selector: 'app-form-device',
  templateUrl: './form-device.component.html',
  styleUrls: ['./form-device.component.scss']
})
export class FormDeviceComponent implements OnInit {

  deviceForm = new FormGroup({
    partNumber: new FormControl(null, Validators.required),
    color: new FormControl('', Validators.required),
    categoryId: new FormControl(null, Validators.required),
  });

  categories: Category[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private deviceService: DeviceService,) {
    this.activatedRoute.data.subscribe(({ categories }) => {
      this.categories = categories;
    })
  }

  ngOnInit(): void {
  }

  onSumbit() {
    if (!this.deviceForm.valid) {
      return;
    }
    this.deviceService.save(this.deviceForm.value).subscribe(r => {

    });
  }

}
