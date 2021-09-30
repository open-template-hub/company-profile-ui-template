import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environmentCommon } from '../environments/environment-common';
import { URLS_RAW } from './data/constant';
import { NAVIGATIONS } from './data/navigation/navigation.data';
import { AuthGuard } from './guard/auth/auth.guard';
import { PublicProfileGuard } from './guard/public-profile/public-profile.guard';
import { NavigationInterceptor } from './interceptor/navigation/navigation.interceptor';
import { CreateEventPageComponent } from './page/dashboard-layout/create-event-page/create-event-page.component';
import { DashboardLayoutComponent } from './page/dashboard-layout/dashboard-layout.component';
import { DashboardPageComponent } from './page/dashboard-layout/dashboard-page/dashboard-page.component';
import { EventPageComponent } from './page/dashboard-layout/event-page/event-page.component';
import { LearnPageComponent } from './page/dashboard-layout/learn-page/learn-page.component';
import { MyProfilePageComponent } from './page/dashboard-layout/my-profile-page/my-profile-page.component';
import { PublicProfilePageComponent } from './page/dashboard-layout/public-profile-page/public-profile-page.component';
import { AboutUsPageComponent } from './page/landing-layout/about-us-page/about-us-page.component';
import { BrandingPageComponent } from './page/landing-layout/branding-page/branding-page.component';
import { ContactUsPageComponent } from './page/landing-layout/contact-us-page/contact-us-page.component';
import { ForgetPasswordPageComponent } from './page/landing-layout/form-pages/forget-password-page/forget-password-page.component';
import { LoginPageComponent } from './page/landing-layout/form-pages/login-page/login-page.component';
import { ResetPasswordPageComponent } from './page/landing-layout/form-pages/reset-password-page/reset-password-page.component';
import { SignUpPageComponent } from './page/landing-layout/form-pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './page/landing-layout/home-page/home-page.component';
import { LandingLayoutComponent } from './page/landing-layout/landing-layout.component';
import { CookiePolicyPageComponent } from './page/landing-layout/policy-pages/cookie-policy-page/cookie-policy-page.component';
import { PrivacyPolicyPageComponent } from './page/landing-layout/policy-pages/privacy-policy-page/privacy-policy-page.component';
import { TermsPageComponent } from './page/landing-layout/policy-pages/terms-page/terms-page.component';
import { PricingPageComponent } from './page/landing-layout/pricing-page/pricing-page.component';
import { ProductPageComponent } from './page/landing-layout/product-page/product-page.component';
import { MaintenancePageComponent } from './page/landing-layout/raw-content-pages/maintenance-page/maintenance-page.component';
import { NotFoundPageComponent } from './page/landing-layout/raw-content-pages/not-found-page/not-found-page.component';
import { SignUpSuccessPageComponent } from './page/landing-layout/raw-content-pages/sign-up-success-page/sign-up-success-page.component';
import { VerifyAccountPageComponent } from './page/landing-layout/raw-content-pages/verify-account-page/verify-account-page.component';
import { StatusPageComponent } from './page/landing-layout/status-page/status-page.component';
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
      {
        path: '',
        component: HomePageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.notFound.url,
        component: NotFoundPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.maintenance.url,
        component: MaintenancePageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.signupSuccess.url,
        component: SignUpSuccessPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.verifyAccount.url,
        component: VerifyAccountPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.cookiePolicy.url,
        component: CookiePolicyPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.privacyPolicy.url,
        component: PrivacyPolicyPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.terms.url,
        component: TermsPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.about.url,
        component: AboutUsPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.signup.url,
        component: SignUpPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.login.url,
        component: LoginPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.branding.url,
        component: BrandingPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.forgetPassword.url,
        component: ForgetPasswordPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.resetPassword.url,
        component: ResetPasswordPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.contactUs.url,
        component: ContactUsPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.status.url,
        component: StatusPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.u.url + '/' + ':username',
        component: PublicProfilePageComponent,
        data: { isPublic: true },
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.pricing.url + '/' + ':productLine' + '/' + ':product',
        component: PricingPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.product.url + '/' + ':productLine' + '/' + ':product',
        component: ProductPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
    ],
  },
  {
    path: URLS_RAW.callback.root,
    component: SplashLayoutComponent,
    children: [
      {
        path: URLS_RAW.callback.dribbble,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.dribbble },
      },
      {
        path: URLS_RAW.callback.facebook,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.facebook },
      },
      {
        path: URLS_RAW.callback.github,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.github },
      },
      {
        path: URLS_RAW.callback.google,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.google },
      },
      {
        path: URLS_RAW.callback.linkedin,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.linkedin },
      },
      {
        path: URLS_RAW.callback.reddit,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.reddit },
      },
      {
        path: URLS_RAW.callback.twitch,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.twitch },
      },
      {
        path: URLS_RAW.callback.twitter,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.twitter },
      },
      {
        path: URLS_RAW.callback.stripe,
        component: CallbackPageComponent,
        data: { payment: environmentCommon.website.stripe },
      },
    ],
  },
  {
    path: URLS_RAW.external,
    component: SplashLayoutComponent,
    children: [ { path: '', component: ExternalRedirectPageComponent } ],
  },
  {
    path: URLS_RAW.dashboard.root,
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: DashboardPageComponent, canActivate: [ AuthGuard ] },
      {
        path: URLS_RAW.dashboard.myProfile,
        component: MyProfilePageComponent,
        canActivate: [ AuthGuard ],
      },
      {
        path: URLS_RAW.dashboard.createEvent,
        component: CreateEventPageComponent,
        canActivate: [ AuthGuard ],
      },
      {
        path: URLS_RAW.dashboard.learn,
        component: LearnPageComponent,
        canActivate: [ AuthGuard ],
      },
      {
        path: URLS_RAW.dashboard.event,
        component: EventPageComponent,
        canActivate: [ AuthGuard ],
      },
      {
        path: URLS_RAW.dashboard.privacy,
        component: MaintenancePageComponent,
        canActivate: [ AuthGuard ],
      },
    ],
  },
  {
    path: URLS_RAW.user,
    component: DashboardLayoutComponent,
    children: [
      {
        path: ':username',
        component: PublicProfilePageComponent,
        canActivate: [ PublicProfileGuard ],
      },
    ],
  },
  {
    path: URLS_RAW.settings.root,
    component: SettingsLayoutComponent,
    children: [
      {
        path: URLS_RAW.settings.editTheme,
        component: EditThemePageComponent
        /* Todo: add auth guard when needed
         canActivate: [AuthGuard], */
      },
    ],
  },
  // otherwise redirect to error
  { path: '**', redirectTo: NAVIGATIONS.notFound.url },
];

@NgModule( {
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload',
    initialNavigation: 'enabled'
}),
  ],
  exports: [ RouterModule ],
} )
export class AppRoutingModule {
}
