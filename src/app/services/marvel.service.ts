import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { INewsMarvel } from 'src/types/INews';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private keyTimeHash = `apikey=${environment.publicKey}&ts=${environment.timeStamp}&hash=${environment.hash}`;

  private apiUrl = `${environment.baseUrl}/events?${this.keyTimeHash}`;

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get<INewsMarvel>(this.apiUrl);
  }

  getNewDetail(id: number): Observable<any> {
    const url = `${environment.baseUrl}/events/${id}?${this.keyTimeHash}`;
    return this.http.get<INewsMarvel>(url);
  }
}
