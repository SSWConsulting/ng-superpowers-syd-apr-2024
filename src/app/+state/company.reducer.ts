import { createReducer, on } from "@ngrx/store";
import { Company } from "../company/company";
import { loadCompaniesSuccess } from "./company.actions";

export const initialState: Company[] = [];

export const companyReducer = createReducer(
  initialState,
  on(loadCompaniesSuccess, (state, { payload }) => payload)
)
