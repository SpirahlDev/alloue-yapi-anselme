import { Injectable } from '@angular/core';
import { AnselmeAlloue } from '../model/anselme-alloue';
import { AppConfig } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  private _me: AnselmeAlloue;

  constructor(private appConf:AppConfig) { 
    this._me = new AnselmeAlloue();
  }

  get me(): AnselmeAlloue {
    return this._me;
  }

  get age(): number {
    return this._me.age;
  }

  get localisation(): string {
    return this._me.localisation;
  }

  get projects() {
    return this._me.projects;
  }

  get technologies() {
    return this._me.technologies;
  }

  get skills() {
    return this._me.skills;
  }

  get socialLinks(){
    return this._me.socialLinks;
  }

  
}
