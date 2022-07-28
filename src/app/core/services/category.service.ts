import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({ providedIn: 'root' })
export class CategoryService {

  url = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) { }

  list(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url)
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        }
        )
      )
  }

  save(value: any) {
    return this.http.post<Category>(this.url, value)
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        }
        )
      )
  }

}
