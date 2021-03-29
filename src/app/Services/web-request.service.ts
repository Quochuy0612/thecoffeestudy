import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;
   
  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'https://the-coffee-study.herokuapp.com';
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  put(uri: string, payload: Object) {
    return this.http.put(`${this.ROOT_URL}/${uri}`,payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  login(phonnumber: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/api/signin`, {
      phonnumber,
      password
    }, {
        observe: 'response'
      });
  }
  signup(fullname: string, phonnumber: string, email: string, password: string, sex: string, birthday: string, roles: string) {
    return this.http.post(`${this.ROOT_URL}/api/signup`, {
      fullname,
      phonnumber,
      email,
      password,
      sex,
      birthday,
      roles,
    }, {
        observe: 'response'
      });
  }

  resetPassword(email: string) {
    return this.http.post(`${this.ROOT_URL}/api/resetPassword`, {
      email,
    }, {
        observe: 'response'
      });
  }

  newPassword(password: string, token: string) {
    return this.http.post(`${this.ROOT_URL}/api/newPassword`, {
      password,
      token
    }, {
        observe: 'response'
      });
  }
}
