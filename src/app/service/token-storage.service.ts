import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  
  constructor(private http:HttpClient) { }

  signOut(): void {
    alert("session expired");
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem("access_token");
    window.sessionStorage.setItem("access_token", token);
  }

  public saveTokenRefresh(token: string): void {
    window.sessionStorage.removeItem("refresh_token");
    window.sessionStorage.setItem("refresh_token", token);
  }

  public static getToken(): string | null {
    return window.sessionStorage.getItem("access_token");
  }
  public  static getToken2(): string | null {
    return window.sessionStorage.getItem('refresh_token');
  }
  saveRefreshToken2(refreshToken: string) {
    localStorage.setItem('refresh_token', refreshToken);
  }

  saveAcessToken(refreshToken: string) {
    localStorage.setItem('access_token', refreshToken);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  getRefreshToken(): string {
    return localStorage.getItem('refresh_token');
  }


  GenerateRefreshToken():any {
    
    return this.http.get('http://localhost:8900/SPORTIFYAUTHENTIFICATION/auth/refreshToken');
  }
}
