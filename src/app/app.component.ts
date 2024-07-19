import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { InjectTokenInterceptor } from './core/interceptors/injec-token.interceptor';


@Component({
  selector: 'app-root', // nombre de etiqueta que usaremos en html
  standalone: true,
  imports: [RouterOutlet], // aqui se importan los modulos para que aparezcan en la página principal, equivale a app.module.ts
  providers:[CookieService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InjectTokenInterceptor  
  }
  ],
  templateUrl: './app.component.html', // plantilla html que se va a mostrar
  styleUrls: ['./app.component.css'] // estilos que va a tener la plantilla html
})
export class AppComponent {
  title = 'my-app';
}
