import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string | null = null;

  constructor(private http: HttpClient) { }


  async signIn(email: string, password: string): Promise<void> {
    const wait = await this.http.post<any>('http://localhost:5124/api/signin', { email, password }).subscribe(
      response => {
        //  successful sign-in response
        const token = response.token;
        // Store the token securely
        localStorage.setItem('accessToken', token);
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
      }
    );

  }



  signOut(): void {
    // Clear the authentication token
    localStorage.removeItem('accessToken');
  }



}
