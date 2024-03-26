import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  constructor(private http: HttpClient) {}

  getEmployeeList(): Observable<any> {
    return this.http.get<any>('../jsonData/employeeList.json').pipe(
      map((data) => data)
    );
  }
}