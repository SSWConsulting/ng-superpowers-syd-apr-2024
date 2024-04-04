import { Component } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {

  companies: Company[] = [];

  constructor() {
    this.companies = [
      { name: 'company 1', email: 'email 1', phone: '111' },
      { name: 'company 2', email: 'email 2', phone: '111' }
    ];
  }
}
