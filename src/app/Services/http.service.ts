import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lection} from "../Models/Lection";
import {Chapter} from "../Models/Chapter";
import {ChapterContent} from "../Models/ChapterContent";
import {LectionProgress} from "../Models/LectionProgress";

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

  public GetAllUserprogress(UserGUID: string):Promise<LectionProgress[]>{
    return new Promise((resolve, reject) => {
      this.http.get<LectionProgress[]>('http://localhost:8081/progress/' + UserGUID).subscribe({
        next: (response) => {
          resolve(response);
        },
        error: (error) => {
          console.error(error);
          reject(error);
        }
      });
    });
  }

  public GetSubscribedLections(UserGUID: string):Observable<Lection[]>{
    return this.http.get<Lection[]>('http://localhost:8081/lections/byUser/' + UserGUID,{
      headers: new HttpHeaders()
        .set('Content-Type','application/json')
    });
  }

  public RemoveUserProgress(UserGUID: string, LectionID: number):void{
    this.http.delete('http://localhost:8081/progress/' + UserGUID + '/' + LectionID,{
      headers: new HttpHeaders()
        .set('Content-Type','application/json')
    });
  }

  public CreateUserProgress(UserGUID: string, LectionID: number): Promise<LectionProgress>{
    let body = {
      "userGUID": UserGUID,
      "lectionID": LectionID
    }

    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8081/progress', body).subscribe({
        next: (response: any) => {
          resolve(response);
        },
        error: (error) => {
          console.error(error);
          reject(error);
        }
      });
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

  public GetChapterContent(chapterId: number):Observable<ChapterContent[]>{
    return this.http.get<ChapterContent[]>('http://localhost:8081/chapter-contents/byChapter/'+chapterId,{
      headers: new HttpHeaders()
        .set('Content-Type','application/json')
    });
  }


}
