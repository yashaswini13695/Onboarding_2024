import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
  })
  export class PeopleService {
    private apiUrl: string;

    constructor(private http: HttpClient, private configService: ConfigService) {
      this.apiUrl = this.configService.getApiUrl();
    }

    getEmployeeList(): Observable<any> {
       return this.http.get<any>(`${this.apiUrl}/employee/list`);
    }

    addEmployee(employee: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/employee/add`, employee);
    }
  }