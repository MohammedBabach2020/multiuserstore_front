import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }


  signIn(email: string, password: string): any {
    const wait = this.http.post<any>('http://localhost:5124/api/signin', { email, password }).subscribe(
      response => {
        //  successful sign-in response
        const token = response.token;
        // Store the token securely
        localStorage.setItem('accessToken', token);
        this.router.navigate(['/layout/dashboard']);

      }
    );

  }

  signUp(name: string, email: string, emailConfirmation: string, password: string, passwordConfirmation: string): void {


    this.http.post<any>('http://localhost:5124/api/signup', { name, email, confirmEMail: emailConfirmation, password, confirmPassword: passwordConfirmation }).subscribe(
      response => {
        //  successful sign-in response
        const token = response.token;
        // Store the token securely
        localStorage.setItem('accessToken', token);
        this.router.navigate(['/createStore']);
      }
    );

  }



  signOut(): void {
    // Clear the authentication token
    localStorage.removeItem('accessToken');
  }



}
