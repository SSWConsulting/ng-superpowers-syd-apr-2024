import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent implements OnInit {

  companies: Company[] = [];

  constructor(
    private readonly companyService: CompanyService,
  ) {
  }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(companies => this.companies = companies);
  }
}
