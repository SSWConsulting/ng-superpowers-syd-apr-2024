import { Component, OnDestroy, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent implements OnInit {

  companies$ = this.companyService.getCompanies().pipe(
    finalize(() => console.log('Get companies - finalized'))
  );

  constructor(
    private readonly companyService: CompanyService,
  ) {
  }

  ngOnInit(): void {

  }
}
