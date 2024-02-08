import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { UsuariosService } from './usuarios/services/usuarios.service';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { provideEnvironmentNgxMask } from 'ngx-mask';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    importProvidersFrom(HttpClientModule, BrowserModule, MatToolbarModule),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideClientHydration(),
    provideEnvironmentNgxMask(),
  ],
};
