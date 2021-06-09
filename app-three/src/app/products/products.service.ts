import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Product } from './products.model';

@Injectable()
export class ProductService{

  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url).pipe(
        tap(data => console.log('All: ', JSON.stringify(data)))
    );
  }
}