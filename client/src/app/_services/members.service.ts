import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';


// const httpOptions ={
//   headers: new HttpHeaders({
//     Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
//   })
// } removed after adding jwtinterceptor

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }
  getMembers() //: Observable<Member[]>
  {

    return this.http.get<Member[]>(this.baseUrl + 'users'/*, httpOptions */);
  }

  getMember(username)
  {
    return this.http.get<Member>(this.baseUrl + 'users/' + username/*, httpOptions*/)
  }
}
