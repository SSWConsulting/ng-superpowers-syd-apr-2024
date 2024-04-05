import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly API_BASE = 'https://app-fbc-crm-api-prod.azurewebsites.net/api';

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`).pipe(
      catchError(this.errorHandler),
    );
  }

  // 1. use http interceptor and move this logic to a global handler
  // 2. return an empty observable - means its completed
  private errorHandler(error: Error): Observable<Company[]> {
    console.error('implement custom error handler here', error);
    return new Observable<Company[]>();
  }
}
