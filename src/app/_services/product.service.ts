import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl  = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getData(): Observable<Data[]> {
    return this.http.get(this.baseUrl).pipe(
      map((response: any) => {
        console.log(Object.values(response));
        return Object.values(response);
      })
    );
  }

}
