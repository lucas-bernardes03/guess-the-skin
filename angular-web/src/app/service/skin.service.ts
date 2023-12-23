import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SkinService {

  constructor(public http : HttpClient) { }

  getSkin() : Observable<any>{
    return this.http.get('http://localhost:8080/skin')
  }

}
