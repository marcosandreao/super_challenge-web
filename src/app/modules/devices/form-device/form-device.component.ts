import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/core/models/category';
import { DeviceService } from 'src/app/core/services/device.service';
import { MessageService } from 'src/app/core/services/message.service';

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
    private router: Router,
    private deviceService: DeviceService,
    private messageService: MessageService) {
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

    const color = (this.deviceForm.value.color as any).hex;

    const data = {
      categoryId: this.deviceForm.value.categoryId,
      color: `#${color}`,
      partNumber: this.deviceForm.value.partNumber
    };


    this.deviceService.save(data).subscribe(r => {
      this.messageService.show("Device has been created.");
      this.back();
    });
  }

  back() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

}
