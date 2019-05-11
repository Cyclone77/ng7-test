import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpTestService {

  constructor(
    private http: HttpClient
  ) { }

  getDataJson() {
    this.http.get('https://easy-mock.com/mock/59c37dc2e0dc663341b35a80/example/cleared').subscribe(data => {
      console.log(data);
    });
  }
}
