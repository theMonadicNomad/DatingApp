import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({ //can be injected into other components or other services 
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl; //'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<User>(1); //to store the user as observable
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }
  login(model: any)
  {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response:User) => {
        const user = response;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }

      })
    )
  }

  register(model: any){
    return this.http.post(this.baseUrl + 'account/register',model).pipe(
      map((user : User) => {
        if(user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    )
  }
  setCurrentUser(user: User)
  {
    this.currentUserSource.next(user); 
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
