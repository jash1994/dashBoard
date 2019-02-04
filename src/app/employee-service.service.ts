import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private url = '/assets/data/employee.json';


  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
   return this.http.get<Employee[]>(this.url);
  }

}
