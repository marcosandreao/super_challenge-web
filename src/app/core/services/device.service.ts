import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device } from '../models/device';

@Injectable({ providedIn: 'root' })
export class DeviceService {

  url = `${environment.apiUrl}/devices`;

  constructor(private http: HttpClient) { }

  list(): Observable<Device[]> {
    return this.http.get<Device[]>(this.url);
  }

  save(value: any) {
    return this.http.post<Device>(this.url, value);
  }

}
