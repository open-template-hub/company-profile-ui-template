import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environmentCommon } from '../environments/environment-common';
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
import { BlogContentPageComponent } from './page/landing-layout/blog-page/blog-content-page/blog-content-page.component';
import { BlogPageComponent } from './page/landing-layout/blog-page/blog-page.component';
import { BrandingPageComponent } from './page/landing-layout/branding-page/branding-page.component';
import { ContactUsPageComponent } from './page/landing-layout/contact-us-page/contact-us-page.component';
import { CustomersPageComponent } from './page/landing-layout/customers-page/customers-page.component';
import { DocsContentPageComponent } from './page/landing-layout/docs-page/docs-content-page/docs-content-page.component';
import { DocsPageComponent } from './page/landing-layout/docs-page/docs-page.component';
import { ForgetPasswordPageComponent } from './page/landing-layout/form-pages/forget-password-page/forget-password-page.component';
import { LoginPageComponent } from './page/landing-layout/form-pages/login-page/login-page.component';
import { ResetPasswordPageComponent } from './page/landing-layout/form-pages/reset-password-page/reset-password-page.component';
import { SignUpPageComponent } from './page/landing-layout/form-pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './page/landing-layout/home-page/home-page.component';
import { LandingLayoutComponent } from './page/landing-layout/landing-layout.component';
import { PartnersPageComponent } from './page/landing-layout/partners-page/partners-page.component';
import { CookiePolicyPageComponent } from './page/landing-layout/policy-pages/cookie-policy-page/cookie-policy-page.component';
import { PrivacyPolicyPageComponent } from './page/landing-layout/policy-pages/privacy-policy-page/privacy-policy-page.component';
import { TermsPageComponent } from './page/landing-layout/policy-pages/terms-page/terms-page.component';
import { PricingPageComponent } from './page/landing-layout/pricing-page/pricing-page.component';
import { ProductPageComponent } from './page/landing-layout/product-page/product-page.component';
import { MaintenancePageComponent } from './page/landing-layout/raw-content-pages/maintenance-page/maintenance-page.component';
import { NotFoundPageComponent } from './page/landing-layout/raw-content-pages/not-found-page/not-found-page.component';
import { SignUpSuccessPageComponent } from './page/landing-layout/raw-content-pages/sign-up-success-page/sign-up-success-page.component';
import { VerifyAccountPageComponent } from './page/landing-layout/raw-content-pages/verify-account-page/verify-account-page.component';
import { SitemapPageComponent } from './page/landing-layout/sitemap-page/sitemap-page.component';
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
        path: NAVIGATIONS.blog.url,
        component: BlogPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.docs.url,
        component: DocsPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.partners.url,
        component: PartnersPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.customers.url,
        component: CustomersPageComponent,
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
        path: NAVIGATIONS.sitemap.url,
        component: SitemapPageComponent,
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
      {
        path: NAVIGATIONS.blog.url + '/:blogTag' + '/' + ':blogKey',
        component: BlogContentPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.docs.url + '/:docTag' + '/' + ':docKey',
        component: DocsContentPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
    ],
  },
  {
    path: NAVIGATIONS.callback.url,
    component: SplashLayoutComponent,
    children: [
      {
        path: NAVIGATIONS.dribbble.url,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.dribbble },
      },
      {
        path: NAVIGATIONS.facebook.url,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.facebook },
      },
      {
        path: NAVIGATIONS.github.url,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.github },
      },
      {
        path: NAVIGATIONS.google.url,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.google },
      },
      {
        path: NAVIGATIONS.linkedin.url,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.linkedin },
      },
      {
        path: NAVIGATIONS.reddit.url,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.reddit },
      },
      {
        path: NAVIGATIONS.twitch.url,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.twitch },
      },
      {
        path: NAVIGATIONS.twitter.url,
        component: CallbackPageComponent,
        data: { oauth: environmentCommon.website.twitter },
      },
      {
        path: NAVIGATIONS.stripe.url,
        component: CallbackPageComponent,
        data: { payment: environmentCommon.website.stripe },
      },
    ],
  },
  {
    path: NAVIGATIONS.external.url,
    component: SplashLayoutComponent,
    children: [ { path: '', component: ExternalRedirectPageComponent } ],
  },
  {
    path: NAVIGATIONS.dashboard.url,
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: DashboardPageComponent, canActivate: [ AuthGuard ] },
      {
        path: NAVIGATIONS.myProfile.url,
        component: MyProfilePageComponent,
        canActivate: [ AuthGuard ],
      },
      {
        path: NAVIGATIONS.createEvent.url,
        component: CreateEventPageComponent,
        canActivate: [ AuthGuard ],
      },
      {
        path: NAVIGATIONS.learn.url,
        component: LearnPageComponent,
        canActivate: [ AuthGuard ],
      },
      {
        path: NAVIGATIONS.event.url,
        component: EventPageComponent,
        canActivate: [ AuthGuard ],
      },
      {
        path: NAVIGATIONS.privacy.url,
        component: MaintenancePageComponent,
        canActivate: [ AuthGuard ],
      },
    ],
  },
  {
    path: NAVIGATIONS.user.url,
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
    path: NAVIGATIONS.settings.url,
    component: SettingsLayoutComponent,
    children: [
      {
        path: NAVIGATIONS.editTheme.url,
        component: EditThemePageComponent,
        canActivate: [ AuthGuard ]
      },
    ],
  },
  // otherwise redirect to error
  { path: '**', redirectTo: NAVIGATIONS.notFound.url },
];

@NgModule( {
  imports: [
    RouterModule.forRoot( routes, {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
    } ),
  ],
  exports: [ RouterModule ],
} )
export class AppRoutingModule {
}
