import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { WwdSectionComponent } from './components/wwd-section/wwd-section.component';

import { GuideSectionComponent } from './components/guide-section/guide-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { CardComponent } from './components/card/card.component';
import { PlansSectionComponent } from './components/plans-section/plans-section.component';
import { SocialMediaSectionComponent } from './components/social-media-section/social-media-section.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisclaimerComponent } from './pages/disclaimer/disclaimer.component';
import { DisclaimerDivComponent } from './components/disclaimer-div/disclaimer-div.component';
import { AboutusDivComponent } from './components/aboutus-div/aboutus-div.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PricingComponent,
    HeroSectionComponent,
    WwdSectionComponent,
    GuideSectionComponent,
    FaqSectionComponent,
    CardComponent,
    PlansSectionComponent,
    SocialMediaSectionComponent,
    FeaturesSectionComponent,
    DisclaimerComponent,
    DisclaimerDivComponent,
    AboutusDivComponent,
    ContactUsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
