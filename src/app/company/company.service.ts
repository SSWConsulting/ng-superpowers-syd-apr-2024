import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private readonly API_BASE = environment.API_BASE;

  constructor(private readonly httpClient: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.httpClient
      .get<Company[]>(`${this.API_BASE}/company`)
      .pipe(catchError(this.errorHandler<Company[]>));
  }

  getCompany(companyId: number): Observable<Company> {
    return this.httpClient
      .get<Company>(`${this.API_BASE}/company/${companyId}`)
      .pipe(catchError(this.errorHandler<Company>));
  }

  addCompany(company: Company): Observable<Company> {
    return this.httpClient
      .post<Company>(`${this.API_BASE}/company`, company)
      .pipe(catchError(this.errorHandler<Company>));
  }

  updateCompany(company: Company): Observable<Company> {
    return this.httpClient
      .put<Company>(`${this.API_BASE}/company/${company.id}`, company)
      .pipe(catchError(this.errorHandler<Company>));
  }

  deleteCompany(companyId: number): Observable<Company> {
    return this.httpClient
      .delete<Company>(`${this.API_BASE}/company/${companyId}`)
      .pipe(catchError(this.errorHandler<Company>));
  }

  // 1. use http interceptor and move this logic to a global handler
  // 2. return an empty observable - means its completed
  private errorHandler<T>(error: Error): Observable<T> {
    console.error('implement custom error handler here', error);
    return new Observable<T>();
  }
}
