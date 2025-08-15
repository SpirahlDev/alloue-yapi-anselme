import { ApplicationConfig, Injectable, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes'; 
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'enabled',
      anchorScrolling:'enabled'
    })),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: Aura,
          options: {
              darkModeSelector: false
          }
      }
    })
  ]
};


@Injectable({
  providedIn: 'root'
})
export class AppConfig {

  private readonly config = {
    domain: environment.domain,
    production: environment.production
  };

  private get(key: keyof typeof this.config) {
    return this.config[key];
  }

  get baseUrl(){
    return this.getBaseUrl();
  }

  get ApiBaseUrl(){
    return `${this.getBaseUrl()}/api`;
  }

  getBaseUrl():string{
    const baseUrl = this.get('domain');

    if(typeof baseUrl=="string"){
      return baseUrl;
    }
    return '';
  }
}