import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environmentCommon } from '../environments/environment-common';
import { URLS_RAW } from './data/constant';
import { AuthGuard } from './guard/auth/auth.guard';
import { PublicProfileGuard } from './guard/public-profile/public-profile.guard';
import { CreateEventComponent } from './page/dashboard-layout/create-event/create-event.component';
import { DashboardLayoutComponent } from './page/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './page/dashboard-layout/dashboard/dashboard.component';
import { EventComponent } from './page/dashboard-layout/event/event.component';
import { LearnComponent } from './page/dashboard-layout/learn/learn.component';
import { MyProfileComponent } from './page/dashboard-layout/my-profile/my-profile.component';
import { PublicProfileComponent } from './page/dashboard-layout/public-profile/public-profile.component';
import { AboutUsComponent } from './page/landing-layout/about-us/about-us.component';
import { ContactUsComponent } from './page/landing-layout/contact-us/contact-us.component';
import { CookiePolicyComponent } from './page/landing-layout/cookie-policy/cookie-policy.component';
import { ForgetPasswordComponent } from './page/landing-layout/forget-password/forget-password.component';
import { HomeComponent } from './page/landing-layout/home/home.component';
import { LandingLayoutComponent } from './page/landing-layout/landing-layout.component';
import { LoginComponent } from './page/landing-layout/login/login.component';
import { MaintenanceComponent } from './page/landing-layout/maintenance/maintenance.component';
import { NotFoundComponent } from './page/landing-layout/not-found/not-found.component';
import { PricingComponent } from './page/landing-layout/pricing/pricing.component';
import { PrivacyPolicyComponent } from './page/landing-layout/privacy-policy/privacy-policy.component';
import { ProductPresentationComponent } from './page/landing-layout/product/product-represantation/product-presentation.component';
import { ProductComponent } from './page/landing-layout/product/product.component';
import { ResetPasswordComponent } from './page/landing-layout/reset-password/reset-password.component';
import { ShowroomComponent } from './page/landing-layout/showroom/showroom.component';
import { SignUpSuccessComponent } from './page/landing-layout/sign-up-success/sign-up-success.component';
import { SignUpComponent } from './page/landing-layout/sign-up/sign-up.component';
import { StatusComponent } from './page/landing-layout/status/status.component';
import { TermsComponent } from './page/landing-layout/terms/terms.component';
import { VerifyAccountComponent } from './page/landing-layout/verify-account/verify-account.component';
import { EditProfileComponent } from './page/settings-layout/edit-profile/edit-profile.component';
import { EditThemeComponent } from './page/settings-layout/edit-theme/edit-theme.component';
import { SettingsLayoutComponent } from './page/settings-layout/settings-layout.component';
import { CallbackComponent } from './page/splash-layout/callback/callback.component';
import { ExternalComponent } from './page/splash-layout/external/external.component';
import { SplashLayoutComponent } from './page/splash-layout/splash-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: URLS_RAW.notFound, component: NotFoundComponent },
      { path: URLS_RAW.maintenance, component: MaintenanceComponent },
      { path: URLS_RAW.signupSuccess, component: SignUpSuccessComponent },
      { path: URLS_RAW.verifyAccount, component: VerifyAccountComponent },
      { path: URLS_RAW.cookiePolicy, component: CookiePolicyComponent },
      { path: URLS_RAW.privacyPolicy, component: PrivacyPolicyComponent },
      { path: URLS_RAW.terms, component: TermsComponent },
      { path: URLS_RAW.pricing, component: PricingComponent },
      { path: URLS_RAW.about, component: AboutUsComponent },
      { path: URLS_RAW.showroom, component: ShowroomComponent },
      { path: URLS_RAW.signup, component: SignUpComponent },
      { path: URLS_RAW.login, component: LoginComponent },
      { path: URLS_RAW.forgetPassword, component: ForgetPasswordComponent },
      { path: URLS_RAW.resetPassword, component: ResetPasswordComponent },
      { path: URLS_RAW.contactUs, component: ContactUsComponent },
      { path: URLS_RAW.status, component: StatusComponent },
      { path: URLS_RAW.u + '/' + ':username', component: PublicProfileComponent, data: { isPublic: true } },
      {
        path: URLS_RAW.product + '/' + ':productLine' + '/' + ':product',
        component: ProductComponent,
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
      { path: URLS_RAW.callback.dribbble, component: CallbackComponent, data: { oauth: environmentCommon.website.dribbble } },
      { path: URLS_RAW.callback.facebook, component: CallbackComponent, data: { oauth: environmentCommon.website.facebook } },
      { path: URLS_RAW.callback.github, component: CallbackComponent, data: { oauth: environmentCommon.website.github } },
      { path: URLS_RAW.callback.google, component: CallbackComponent, data: { oauth: environmentCommon.website.google } },
      { path: URLS_RAW.callback.linkedin, component: CallbackComponent, data: { oauth: environmentCommon.website.linkedin } },
      { path: URLS_RAW.callback.reddit, component: CallbackComponent, data: { oauth: environmentCommon.website.reddit } },
      { path: URLS_RAW.callback.twitch, component: CallbackComponent, data: { oauth: environmentCommon.website.twitch } },
      { path: URLS_RAW.callback.twitter, component: CallbackComponent, data: { oauth: environmentCommon.website.twitter } },
      { path: URLS_RAW.callback.stripe, component: CallbackComponent, data: { payment: environmentCommon.website.stripe } },
    ]
  },
  {
    path: URLS_RAW.external,
    component: SplashLayoutComponent,
    children: [
      { path: '', component: ExternalComponent }
    ]
  },
  {
    path: URLS_RAW.dashboard.root,
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: DashboardComponent, canActivate: [ AuthGuard ] },
      { path: URLS_RAW.dashboard.myProfile, component: MyProfileComponent, canActivate: [ AuthGuard ] },
      { path: URLS_RAW.dashboard.createEvent, component: CreateEventComponent, canActivate: [ AuthGuard ] },
      { path: URLS_RAW.dashboard.learn, component: LearnComponent, canActivate: [ AuthGuard ] },
      { path: URLS_RAW.dashboard.event, component: EventComponent, canActivate: [ AuthGuard ] },
      { path: URLS_RAW.dashboard.privacy, component: MaintenanceComponent, canActivate: [ AuthGuard ] }
    ]
  },
  {
    path: URLS_RAW.user,
    component: DashboardLayoutComponent,
    children: [
      { path: ':username', component: PublicProfileComponent, canActivate: [ PublicProfileGuard ] }
    ]
  },
  {
    path: URLS_RAW.settings.root,
    component: SettingsLayoutComponent,
    children: [
      { path: URLS_RAW.settings.editProfile, component: EditProfileComponent, canActivate: [ AuthGuard ] },
      { path: URLS_RAW.settings.editTheme, component: EditThemeComponent, canActivate: [ AuthGuard ] },
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
