import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company/company.service';
import { map } from 'rxjs';
import { AppState } from './+state/appState';
import { Store } from '@ngrx/store';
import { loadCompanies } from './+state/company.actions';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  companyCount$ = this.store
    .select((state) => state.companies)
    .pipe(map((companies) => companies.length));

  constructor(
    private store: Store<AppState>
  ) // private companyService: CompanyService,
  {}

  ngOnInit(): void {
    this.store.dispatch(loadCompanies());
  }
}
