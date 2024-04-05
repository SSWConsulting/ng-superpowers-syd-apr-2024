import { Component } from '@angular/core';
import { CompanyService } from './company/company.service';
import { map } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  companyCount$ = this.companyService.getCompanies().pipe(
    map(companies => companies.length),
    untilDestroyed(this),
  );

  constructor(
    private companyService: CompanyService,
  ) {
  }
}
