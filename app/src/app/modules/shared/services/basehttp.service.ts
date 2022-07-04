import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable()
export class BaseHttpService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  tenantCode: any;
  appUiLayutJson: any;
  constructor(private http: HttpClient) {
    this.appUiLayutJson= <any>(<any>window).__envUI;
    // this.tenantCode  = this.appUiLayutJson['AppUIConfig']['tenantCode'];
    
   }
  getHeaders(): HttpHeaders {
    this.createAuthorizationHeader();
    return this.headers;
  }
  createAuthorizationHeader() {
    const token = localStorage.getItem('access_token');
    if (token) {
      this.headers.set('Authorization', 'Bearer ' + token);

    }
  }
  Post(url: string, body: any) {
    return this.http.post(url, body, {headers: this.getHeaders()}).toPromise();
  }
  postWithParams(url: string, body: any, params: HttpParams) {
    return this.http.post(url, body, {headers: this.getHeaders(), params:params}).toPromise();
  }
  Put(url:string, model: any) {
    return this.http.put(url, model).toPromise();
  }
  PutWithParms(url:string, body: any , params:HttpParams) {
    return this.http.put(url, body , {headers : this.headers , params : params}).toPromise();
  }
  Get(url: string) {
    //this.createAuthorizationHeader();
    return this.http.get(url,{headers: this.headers}).toPromise();
  }
  getWithParams(url:string, params: HttpParams) 
  {
    return this.http.get(url, { headers: this.headers, params: params }).toPromise();
  }
  updateParams(hard_refresh: boolean = false, no_cahce: boolean = true, background_request: boolean = false) 
  {
    let headers = new HttpHeaders();
    headers = headers.set('tenantCode', this.tenantCode);
    if (hard_refresh) {
        headers = headers.set('hard_refresh', 'hard_refresh');
    }
    if (no_cahce) {
        headers = headers.set('no_cahce', 'no_cahce');
    }
    if (background_request) {
        headers = headers.set('background_request', 'background_request');
    }
    return headers;
}
  GetWithParams(url:string, params: HttpParams, hard_refresh: boolean = false, no_cahce: boolean = true, background_request: boolean = false) 
  {
      const headers = this.updateParams(hard_refresh, no_cahce, background_request);
      return this.http.get(url, { headers: headers, params: params }).toPromise();
  }
  
  Delete(url: string) {
    return this.http.delete(url).toPromise();
  }
  deleteWithParams(url:string, params: HttpParams) 
  {
    return this.http.delete(url, { headers: this.headers, params: params }).toPromise();
  }

}



