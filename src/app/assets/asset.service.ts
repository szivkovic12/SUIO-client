import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Asset } from './asset.model';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private assetsUrl = `http://localhost:8080/assets/`;
  constructor(
    private http: HttpClient
  ) { }

  getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.assetsUrl)
      .pipe(
        tap(_ => console.log('fetched students')),
        catchError(this.handleError<Asset[]>('getAssets', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
