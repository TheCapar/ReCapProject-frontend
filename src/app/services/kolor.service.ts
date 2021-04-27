import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KolorResponseModel } from '../models/kolorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class KolorService {

  apiUrl='https://localhost:44344/api/kolor/getall';
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<KolorResponseModel>{
    return this.httpClient.get<KolorResponseModel>(this.apiUrl);
  }
}