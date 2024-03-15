import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lection} from "../Models/Lection";
import {Chapter} from "../Models/Chapter";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public GetLections():Observable<Lection[]>{
    return this.http.get<Lection[]>('http://localhost:8081/lections',{
      headers: new HttpHeaders()
        .set('Content-Type','application/json')
    });
  }

  public GetLection(id: number):Promise<Lection>{
    return new Promise((resolve) => {
      this.http.get<Lection>('http://localhost:8081/lections/'+id).subscribe({
        next: (response) => {
          console.log('Serverantwort: ', response);
          resolve(response);
        },
        error: (error) => {
          console.error('Fehler: ', error);
          resolve(error);
        }
      });
    });
  }

  public GetChapters(id: number):Observable<Chapter[]>{
    return this.http.get<Chapter[]>('http://localhost:8081/chapters/byLection/'+id,{
      headers: new HttpHeaders()
        .set('Content-Type','application/json')
    });
  }


}
