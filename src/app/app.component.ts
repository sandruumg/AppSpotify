import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // nombre de etiqueta que usaremos en html
  standalone: true,
  imports: [RouterOutlet], // aqui se importan los modulos para que aparezcan en la página principal, equivale a app.module.ts
  templateUrl: './app.component.html', // plantilla html que se va a mostrar
  styleUrls: ['./app.component.css'] // estilos que va a tener la plantilla html
})
export class AppComponent {
  title = 'my-app';
}
