import { ApplicationConfig } from '@angular/core'; // Import ApplicationConfig
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Import provideAnimationsAsync

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = { // Add type ApplicationConfig
  providers: [
    provideRouter(routes),
    provideHttpClient(), // Add HttpClient provider
    provideAnimationsAsync() // Add Animations provider
  ]
};
