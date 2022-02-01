import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://localhost:3000/myJson';

  data: any[];
  content = require('data.json');

  constructor(private http: HttpClient) {
    console.log(this.content);
  }

  getAll(): Observable<any> {
    // Can be used like this if json-server is installed
    // To make it work run json-server --watch data.json in root of project
    // return this.http.get(this.url).pipe(map((response: any) => response));
    return of(this.content.myJson);
  }
}
