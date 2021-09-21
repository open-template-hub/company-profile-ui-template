import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environmentCommon } from '../environments/environment-common';
import { URLS_RAW } from './data/constant';
import { AuthGuard } from './guard/auth/auth.guard';
import { PublicProfileGuard } from './guard/public-profile/public-profile.guard';
import { CreateEventPageComponent } from './page/dashboard-layout/create-event-page/create-event-page.component';
import { DashboardLayoutComponent } from './page/dashboard-layout/dashboard-layout.component';
import { DashboardPageComponent } from './page/dashboard-layout/dashboard-page/dashboard-page.component';
import { EventPageComponent } from './page/dashboard-layout/event-page/event-page.component';
import { LearnPageComponent } from './page/dashboard-layout/learn-page/learn-page.component';
import { MyProfilePageComponent } from './page/dashboard-layout/my-profile-page/my-profile-page.component';
import { PublicProfilePageComponent } from './page/dashboard-layout/public-profile-page/public-profile-page.component';
import { AboutUsPageComponent } from './page/landing-layout/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './page/landing-layout/contact-us-page/contact-us-page.component';
import { CookiePolicyPageComponent } from './page/landing-layout/cookie-policy-page/cookie-policy-page.component';
import { ForgetPasswordPageComponent } from './page/landing-layout/forget-password-page/forget-password-page.component';
import { HomePageComponent } from './page/landing-layout/home-page/home-page.component';
import { LandingLayoutComponent } from './page/landing-layout/landing-layout.component';
import { LoginPageComponent } from './page/landing-layout/login-page/login-page.component';
import { MaintenancePageComponent } from './page/landing-layout/maintenance-page/maintenance-page.component';
import { NotFoundPageComponent } from './page/landing-layout/not-found-page/not-found-page.component';
import { PricingPageComponent } from './page/landing-layout/pricing-page/pricing-page.component';
import { PrivacyPolicyPageComponent } from './page/landing-layout/privacy-policy-page/privacy-policy-page.component';
import { ProductPresentationComponent } from './page/landing-layout/product-page/product-represantation/product-presentation.component';
import { ProductPageComponent } from './page/landing-layout/product-page/product-page.component';
import { ResetPasswordPageComponent } from './page/landing-layout/reset-password-page/reset-password-page.component';
import { ShowroomPageComponent } from './page/landing-layout/showroom-page/showroom-page.component';
import { SignUpSuccessPageComponent } from './page/landing-layout/sign-up-success-page/sign-up-success-page.component';
import { SignUpPageComponent } from './page/landing-layout/sign-up-page/sign-up-page.component';
import { StatusPageComponent } from './page/landing-layout/status-page/status-page.component';
import { TermsPageComponent } from './page/landing-layout/terms-page/terms-page.component';
import { VerifyAccountPageComponent } from './page/landing-layout/verify-account-page/verify-account-page.component';
import { EditProfilePageComponent } from './page/settings-layout/edit-profile-page/edit-profile-page.component';
import { EditThemePageComponent } from './page/settings-layout/edit-theme-page/edit-theme-page.component';
import { SettingsLayoutComponent } from './page/settings-layout/settings-layout.component';
import { CallbackPageComponent } from './page/splash-layout/callback-page/callback-page.component';
import { ExternalRedirectPageComponent } from './page/splash-layout/external-redirect-page/external-redirect-page.component';
import { SplashLayoutComponent } from './page/splash-layout/splash-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: URLS_RAW.notFound, component: NotFoundPageComponent },
      { path: URLS_RAW.maintenance, component: MaintenancePageComponent },
      { path: URLS_RAW.signupSuccess, component: SignUpSuccessPageComponent },
      { path: URLS_RAW.verifyAccount, component: VerifyAccountPageComponent },
      { path: URLS_RAW.cookiePolicy, component: CookiePolicyPageComponent },
      { path: URLS_RAW.privacyPolicy, component: PrivacyPolicyPageComponent },
      { path: URLS_RAW.terms, component: TermsPageComponent },
      { path: URLS_RAW.pricing, component: PricingPageComponent },
      { path: URLS_RAW.about, component: AboutUsPageComponent },
      { path: URLS_RAW.showroom, component: ShowroomPageComponent },
      { path: URLS_RAW.signup, component: SignUpPageComponent },
      { path: URLS_RAW.login, component: LoginPageComponent },
      { path: URLS_RAW.forgetPassword, component: ForgetPasswordPageComponent },
      { path: URLS_RAW.resetPassword, component: ResetPasswordPageComponent },
      { path: URLS_RAW.contactUs, component: ContactUsPageComponent },
      { path: URLS_RAW.status, component: StatusPageComponent },
      { path: URLS_RAW.u + '/' + ':username', component: PublicProfilePageComponent, data: { isPublic: true } },
      {
        path: URLS_RAW.product + '/' + ':productLine' + '/' + ':product',
        component: ProductPageComponent,
        children: [
          { path: '**', component: ProductPresentationComponent }
        ]
      },
    ]
  },
  {
    path: URLS_RAW.callback.root,
    component: SplashLayoutComponent,
    children: [
      { path: URLS_RAW.callback.dribbble, component: CallbackPageComponent, data: { oauth: environmentCommon.website.dribbble } },
      { path: URLS_RAW.callback.facebook, component: CallbackPageComponent, data: { oauth: environmentCommon.website.facebook } },
      { path: URLS_RAW.callback.github, component: CallbackPageComponent, data: { oauth: environmentCommon.website.github } },
      { path: URLS_RAW.callback.google, component: CallbackPageComponent, data: { oauth: environmentCommon.website.google } },
      { path: URLS_RAW.callback.linkedin, component: CallbackPageComponent, data: { oauth: environmentCommon.website.linkedin } },
      { path: URLS_RAW.callback.reddit, component: CallbackPageComponent, data: { oauth: environmentCommon.website.reddit } },
      { path: URLS_RAW.callback.twitch, component: CallbackPageComponent, data: { oauth: environmentCommon.website.twitch } },
      { path: URLS_RAW.callback.twitter, component: CallbackPageComponent, data: { oauth: environmentCommon.website.twitter } },
      { path: URLS_RAW.callback.stripe, component: CallbackPageComponent, data: { payment: environmentCommon.website.stripe } },
    ]
  },
  {
    path: URLS_RAW.external,
    component: SplashLayoutComponent,
    children: [
      { path: '', component: ExternalRedirectPageComponent }
    ]
  },
  {
    path: URLS_RAW.dashboard.root,
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: DashboardPageComponent, canActivate: [ AuthGuard ] },
      { path: URLS_RAW.dashboard.myProfile, component: MyProfilePageComponent, canActivate: [ AuthGuard ] },
      { path: URLS_RAW.dashboard.createEvent, component: CreateEventPageComponent, canActivate: [ AuthGuard ] },
      { path: URLS_RAW.dashboard.learn, component: LearnPageComponent, canActivate: [ AuthGuard ] },
      { path: URLS_RAW.dashboard.event, component: EventPageComponent, canActivate: [ AuthGuard ] },
      { path: URLS_RAW.dashboard.privacy, component: MaintenancePageComponent, canActivate: [ AuthGuard ] }
    ]
  },
  {
    path: URLS_RAW.user,
    component: DashboardLayoutComponent,
    children: [
      { path: ':username', component: PublicProfilePageComponent, canActivate: [ PublicProfileGuard ] }
    ]
  },
  {
    path: URLS_RAW.settings.root,
    component: SettingsLayoutComponent,
    children: [
      { path: URLS_RAW.settings.editProfile, component: EditProfilePageComponent, canActivate: [ AuthGuard ] },
      { path: URLS_RAW.settings.editTheme, component: EditThemePageComponent, canActivate: [ AuthGuard ] },
    ]
  },
  // otherwise redirect to error
  { path: '**', redirectTo: URLS_RAW.notFound }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes, { scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload' } ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
