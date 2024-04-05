import { Component, OnDestroy, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Observable, finalize } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../+state/appState';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
})
export class CompanyListComponent implements OnInit {
  companies$ = this.store.select(state => state.companies);

  constructor(
    private readonly store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    // this.loadCompanies();
  }

  // private loadCompanies(): void {
  //   this.companies$ = this.companyService
  //     .getCompanies()
  //     .pipe(finalize(() => console.log('Get companies - finalized')));
  // }

  companyDeleted(company: Company) {
    // this.companyService.deleteCompany(company.id).subscribe(() => this.loadCompanies());
  }
}
