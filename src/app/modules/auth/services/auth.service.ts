import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, catchError } from 'rxjs/operators'; // Importa catchError para manejar errores

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private fakeUser = {
    email: 'test@example.com',
    password: 'password123',
    tokenSession: 'fake-jwt-token'
  };

  constructor() { }

  sendCredentials(email: string, password: string): Observable<any> {
    // Simula un retraso como si fuera una solicitud HTTP real
    return of(this.checkCredentials(email, password)).pipe(
      delay(1000), // Simula un tiempo de respuesta del servidor
      catchError(err => throwError(() => new Error(err))) // Maneja errores correctamente
    );
  }

  private checkCredentials(email: string, password: string): any {
    if (email === this.fakeUser.email && password === this.fakeUser.password) {
      return {
        tokenSession: this.fakeUser.tokenSession,
        data: {
          email: this.fakeUser.email,
          name: 'Test User'
        }
      };
    } else {
      // Retorna un error adecuado para manejar en el observable
      throw new Error('Credenciales inválidas');
    }
  }
}
