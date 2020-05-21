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
        tap(_ => console.log('fetched assets')),
        catchError(this.handleError<Asset[]>('getAssets', []))
      );
  }
  getAsset(id: string): Observable<Asset> {
    return this.http.get<Asset>(this.assetsUrl+id)
      .pipe(
        tap(_ => console.log('fetched asset by id')),
        catchError(this.handleError<Asset>('getAsset'))
      );
  }
  addAsset(asset: Asset): Observable<Asset> {
    return this.http.post<Asset>(this.assetsUrl, asset).pipe(
      tap(_ => console.log('fetched asset')),
      catchError(this.handleError<Asset>('addAsset'))
    );
  }
  
  updateAsset(asset: Asset): Observable<any> {
    const url = `${this.assetsUrl}/${asset.id}`;
    return this.http.put(url, asset).pipe(
      tap(_ => console.log(`updated asset`)),
      catchError(this.handleError<any>('updateAsset'))
    );
  }
  deleteAsset(asset: Asset | number): Observable<Asset> {
    const id = typeof asset === 'number' ? asset : asset.id;
    const url = `${this.assetsUrl}${id}`;

    return this.http.delete<Asset>(url).pipe(
      tap(_ => console.log(`deleted asset id=${id}`)),
      catchError(this.handleError<Asset>('deleteAsset'))
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
