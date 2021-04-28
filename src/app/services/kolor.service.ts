import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kolor } from '../models/kolor';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class KolorService {

  apiUrl='https://localhost:44344/api/kolor/getall';
  constructor(private httpClient:HttpClient) { }

  getKolors():Observable<ListResponseModel<Kolor>>{
    return this.httpClient.get<ListResponseModel<Kolor>>(this.apiUrl);
  }
}