import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.scss',
})
export class CompanyEditComponent {
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

  companyForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
  });

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private router: Router
  ) {}

  saveCompany() {
    if (this.companyForm.invalid) {
      return;
    }

    const company = this.companyForm.value as Company;

    // TODO: call API to update company

    this.companyService.addCompany(company).subscribe(() => {
      this.router.navigateByUrl('/company/list');
    });
  }
}
