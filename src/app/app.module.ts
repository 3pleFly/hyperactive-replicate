import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CareerOptionsComponent } from './components/career-options/career-options.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { CtaBarComponent } from './components/cta-bar/cta-bar.component';
import { CompanyRefsComponent } from './components/company-refs/company-refs.component';
import { AboutComponent } from './components/about/about.component';
import { ProcessDetailsComponent } from './components/process-details/process-details.component';
import { FaqpsaComponent } from './components/faq-psa/faq-psa.component';
import { CtaFormComponent } from './components/cta-form/cta-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionAnswerComponent } from './components/faq-psa/question-answer/question-answer.component';
import { CompanyBannerComponent } from './components/company-refs/company-banner/company-banner.component';
import { BigBannerComponent } from './components/big-banner/big-banner.component';
import { CareerComponent } from './components/career-options/career/career.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavBarComponent,
    CareerOptionsComponent,
    WhyUsComponent,
    CtaBarComponent,
    CompanyRefsComponent,
    AboutComponent,
    ProcessDetailsComponent,
    FaqpsaComponent,
    CtaFormComponent,
    QuestionAnswerComponent,
    CompanyBannerComponent,
    BigBannerComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule, FontAwesomeModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
