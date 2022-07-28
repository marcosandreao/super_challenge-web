import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/core/models/device';
import { DeviceService } from 'src/app/core/services/device.service';

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.scss']
})
export class ListDevicesComponent implements OnInit {

  devices: Device[] = [];

  constructor(private categoryService: DeviceService) { }

  ngOnInit(): void {
    this.categoryService.list().subscribe( v => {
      this.devices = v;
    });
  }
}
