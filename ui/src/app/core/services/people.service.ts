import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  api = 'http://localhost:5204';

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get(`${this.api}/Person`);
  }

}
