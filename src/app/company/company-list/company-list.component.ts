import { Component, OnDestroy, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
})
export class CompanyListComponent implements OnInit {
  companies$!: Observable<Company[]>;

  constructor(private readonly companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  private loadCompanies(): void {
    this.companies$ = this.companyService
      .getCompanies()
      .pipe(finalize(() => console.log('Get companies - finalized')));
  }

  companyDeleted(company: Company) {
    this.companyService.deleteCompany(company.id).subscribe(() => this.loadCompanies());
  }
}
