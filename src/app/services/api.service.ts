import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpGenericResponse } from '../dtos/http-generic-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "https://newsapi.org/v1"
  constructor(private http: HttpClient) { }

  getSources(): Observable<HttpGenericResponse>{
    return this.http.get<HttpGenericResponse>(`${this.baseUrl}/sources`);
  }
}
