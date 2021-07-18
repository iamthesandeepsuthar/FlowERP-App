import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  
  constructor(private readonly _httpclient: HttpClient) { }


}
