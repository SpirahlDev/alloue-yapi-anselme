import { Injectable } from '@angular/core';
import { AppConfig } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private appConf:AppConfig) { 
  }

  getLink(url:string){

    url = url.replace(/^\/+/, '');

    return `${this.appConf.baseUrl}/${url}`
  }
}
