import { createAction } from "@ngrx/store";
import { Company } from "../company/company";

export const loadCompanies = createAction(
  '[Companies] Load'
);

export const loadCompaniesSuccess = createAction(
  '[Companies] Load Success',
  (companies: Company[]) => ({ payload: companies })
);
