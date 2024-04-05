import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly API_BASE = 'https://app-fbc-crm-api-prod.azurewebsites.net/api';

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`);
  }
}
