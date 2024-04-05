import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.scss',
})
export class CompanyEditComponent implements OnInit {
  // companyForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   phone: new FormControl(''),
  // });

  // companyForm = this.fb.group({
  //   name: this.fb.control(''),
  //   email: this.fb.control(''),
  //   phone: this.fb.control(''),
  // });

  companyId!: number;
  isNewCompany!: boolean;

  companyForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
  });

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.companyId = +this.activateRoute.snapshot.params['id'] || 0;
    this.isNewCompany = !this.companyId;

    if (!this.isNewCompany) {
      // TODO: handle loading scenario with a spinner or something else
      this.companyService
        .getCompany(this.companyId)
        .subscribe(company => this.companyForm.patchValue(company));
    }
  }

  saveCompany() {
    if (this.companyForm.invalid) {
      return;
    }

    const company = {
      ...this.companyForm.value,
      id: this.companyId,
    } as Company;

    const serviceAction = this.isNewCompany
      ? this.companyService.addCompany(company)
      : this.companyService.updateCompany(company);

    serviceAction.subscribe(() => {
      this.router.navigateByUrl('/company/list');
    });

    // if (this.isNewCompany) {
    //   this.companyService.addCompany(company).subscribe(() => {
    //     this.router.navigateByUrl('/company/list');
    //   });
    // } else {
    //   this.companyService.updateCompany(company).subscribe(() => {
    //     this.router.navigateByUrl('/company/list');
    //   });
    // }

  }
}
