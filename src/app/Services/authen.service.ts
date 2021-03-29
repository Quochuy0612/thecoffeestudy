import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User } from 'app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(
    private webService: WebRequestService,
    private router: Router,
    private http: HttpClient,
  ) { }



  login(phonnumber: string, password: string) {
    return this.webService.login(phonnumber, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        // the auth tokens will be in the header of this response
        this.setSession(res.body.id, res.body.fullname, res.body.accessToken, res.body.roles, res.headers.get('x-refresh-token'));
        console.log("LOGGED IN!");
      })
    )
  }

  signup(fullname: string, phonnumber: string, email: string, password: string, sex: string, birthday: string, roles: string) {
    return this.webService.signup(fullname, phonnumber, email, password, sex, birthday, roles).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        console.log("Successfully signed up and now logged in!");
      })
    )
  }

  getAccessToken() {
    return localStorage.getItem('x-access-token');
  }

  getRefreshToken() {
    return localStorage.getItem('x-refresh-token');
  }

  getUserId() {
    return localStorage.getItem('user-name');
  }

  private setSession(userId: string, userName: string, accessToken: string, roles: string, refreshToken: string) {
    localStorage.setItem('userId', userId);
    localStorage.setItem('user-name', userName);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('roles', roles);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  

  ///////////////////////////////////////////////////////////////
  resetPassword(email: string) {
    return this.webService.resetPassword(email);
  }
  newPassword(password: string, token: string,) {
    return this.webService.newPassword(password, token);
  }

  ////////////////////////////////////////////
  logout() {
    this.removeSession();
    this.router.navigate(['/login']);
  }
  private removeSession() {
    localStorage.removeItem('userId');
    localStorage.removeItem('user-name');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('roles');
    localStorage.removeItem('x-refresh-token');

  }
  /////////////////////////////////////////
  getNewAccessToken() {
    return this.http.get(`${this.webService.ROOT_URL}/users/me/access-token`, {
      headers: {
        'x-refresh-token': this.getRefreshToken(),
        '_id': this.getUserId()
      },
      observe: 'response'
    }).pipe(
      tap((res: HttpResponse<any>) => {
        this.setAccessToken(res.headers.get('x-access-token'));
      })
    )
  }
  setAccessToken(accessToken: string) {
    localStorage.setItem('x-access-token', accessToken)
  }
}
