import './style.css';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { App } from './app';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [provideZonelessChangeDetection(),
      provideRouter(routes, withHashLocation()),
      provideHttpClient()
  ],
}).catch((err: unknown) => console.error(err));
