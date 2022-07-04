import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from './basehttp.service';
@Injectable({
  providedIn: 'root'
})
export class PageLayoutService {
  url: string;

  constructor(
    public httpService: HttpClient,
    public baseHttp: BaseHttpService
  ) {
    this.url = `https://cam-application.herokuapp.com/UI-Layout`;
  }
  get(pageName: any) {
    // let params = new HttpParams();
    // params = params.set("pageName",pageName);
    return this.httpService.get(this.url + '/' + pageName)
  }
}