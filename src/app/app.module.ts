import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CompanyTableComponent } from './company/company-table/company-table.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { StoreModule } from '@ngrx/store';
import { companyReducer } from './+state/company.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './+state/company.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyTableComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({ companies: companyReducer }, {}),
    EffectsModule.forRoot([CompanyEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
