  import { bootstrapApplication } from '@angular/platform-browser';
  import { provideRouter } from '@angular/router';
  import { provideHttpClient } from '@angular/common/http';
  import { AppComponent } from './app/app.component';
  import { routes } from './app/app.routes'; // Ajusta la ruta si es necesario

  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      provideHttpClient() // Asegúrate de incluir esto aquí
    ],
  });
