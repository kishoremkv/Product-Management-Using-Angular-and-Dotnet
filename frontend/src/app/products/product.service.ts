import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'    
})
export class ProductService
{
    private configUrl = 'https://localhost:44303';
    private productUrl = "";
    constructor(private http: HttpClient)
    {

    }
    getProducts(): Observable<IProduct[]>
    {
        this.productUrl = this.configUrl+ '/api/Products';
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data=>console.log('All: ',JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    getProduct(id: number): Observable<IProduct> {
        this.productUrl = this.configUrl+ '/api/Products/'+id;
        console.log(this.productUrl);
        return this.http.get<IProduct>(this.productUrl).pipe(
            tap(data => console.log(`fetched product details: =${JSON.stringify(data)}`)),
            catchError(this.handleError)
        )
    }

    deleteProduct(id: number): Observable<IProduct> {
        this.productUrl = this.configUrl+ '/api/Products/'+id;
        return this.http.delete<IProduct>(this.productUrl).pipe(
            tap(_ => console.log(`deleted hero id=${id}`)),
            catchError(this.handleError)
          );
    }
    private handleError(err: HttpErrorResponse)
    {
        console.log('error ',err);
        return throwError(err);
    }
}