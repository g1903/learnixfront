import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { KeycloakAngularModule, KeycloakService} from 'keycloak-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom(KeycloakAngularModule),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
  ]
};

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<any> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'learnix',
        clientId: 'learnix-front',
      },
      loadUserProfileAtStartUp: true,
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false,
        checkLoginIframeInterval: 25
      },
      enableBearerInterceptor: true,
    });
}