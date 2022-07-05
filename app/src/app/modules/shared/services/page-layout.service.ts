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
    this.url = `https://cam-application.herokuapp.com`;
  }
  get(pageName: any) {
    return this.httpService.get(this.url + '/UI-Layout/' + pageName)
  }
  getLayout(pageName:any){
    return this.httpService.get(this.url + '/BasePageUI-matrix/' + pageName)
  }
  getClients(){
    return this.httpService.get(this.url + '/clients' )
  }
}