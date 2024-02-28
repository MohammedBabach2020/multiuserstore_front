import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class isAuthenticated {
  constructor() { }

  isAuthenticated(): boolean {
    // Check if the user is authenticated
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return false; // Token does not exist
    }

    const tokenData = this.decodeToken(token);
    if (!tokenData || !tokenData.exp) {
      return false; // Token is missing expiration data
    }

    // Check if the current time is past the token's expiration time
    const expirationTime = tokenData.exp * 1000; // Convert expiration time to milliseconds

    console.log(expirationTime)
    console.log(Date.now())
    return Date.now() < expirationTime;
  }

  private decodeToken(token: string): any {
    try {
      // Decode the JWT token
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
