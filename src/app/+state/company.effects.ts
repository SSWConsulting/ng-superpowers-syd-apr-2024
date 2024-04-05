import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CompanyService } from "../company/company.service";
import { loadCompanies, loadCompaniesSuccess } from "./company.actions";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { EMPTY } from "rxjs";

@Injectable()
export class CompanyEffects {

  loadCompanies$ = createEffect(() => this.actions$.pipe(
    ofType(loadCompanies.type),
    exhaustMap(() => this.companyService.getCompanies()
      .pipe(
        map(companies => loadCompaniesSuccess(companies)),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {}
}
