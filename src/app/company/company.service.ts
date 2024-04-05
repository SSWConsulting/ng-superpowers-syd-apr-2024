import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompanies(): Company[] {
    return [
      { name: 'company 1', email: 'email 1', phone: '111' },
      { name: 'company 2', email: 'email 2', phone: '111' }
    ];
  }
}
