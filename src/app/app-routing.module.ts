import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environmentCommon } from '../environments/environment-common';
import { AuthGuard } from './guard/auth/auth.guard';
import { PublicProfileGuard } from './guard/public-profile/public-profile.guard';
import { CreateEventComponent } from './page/dashboard-layout/create-event/create-event.component';
import { DashboardLayoutComponent } from './page/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './page/dashboard-layout/dashboard/dashboard.component';
import { EventComponent } from './page/dashboard-layout/event/event.component';
import { LearnComponent } from './page/dashboard-layout/learn/learn.component';
import { MyProfileComponent } from './page/dashboard-layout/my-profile/my-profile.component';
import { PublicProfileComponent } from './page/dashboard-layout/public-profile/public-profile.component';
import { ForgetPasswordComponent } from './page/landing-layout/forget-password/forget-password.component';
import { LandingLayoutComponent } from './page/landing-layout/landing-layout.component';
import { LoginComponent } from './page/landing-layout/login/login.component';
import { ResetPasswordComponent } from './page/landing-layout/reset-password/reset-password.component';
import { ShowroomComponent } from './page/landing-layout/showroom/showroom.component';
import { SignUpComponent } from './page/landing-layout/sign-up/sign-up.component';
import { CookiePolicyComponent } from './page/raw-landing-layout/cookie-policy/cookie-policy.component';
import { HomeComponent } from './page/raw-landing-layout/home/home.component';
import { MaintenanceComponent } from './page/raw-landing-layout/maintenance/maintenance.component';
import { NotFoundComponent } from './page/raw-landing-layout/not-found/not-found.component';
import { PricingComponent } from './page/raw-landing-layout/pricing/pricing.component';
import { PrivacyPolicyComponent } from './page/raw-landing-layout/privacy-policy/privacy-policy.component';
import { ProductComponent } from './page/raw-landing-layout/product/product.component';
import { RawLandingLayoutComponent } from './page/raw-landing-layout/raw-landing-layout.component';
import { SignUpSuccessComponent } from './page/raw-landing-layout/sign-up-success/sign-up-success.component';
import { TermsComponent } from './page/raw-landing-layout/terms/terms.component';
import { VerifyAccountComponent } from './page/raw-landing-layout/verify-account/verify-account.component';
import { EditProfileComponent } from './page/settings-layout/edit-profile/edit-profile.component';
import { EditThemeComponent } from './page/settings-layout/edit-theme/edit-theme.component';
import { SettingsLayoutComponent } from './page/settings-layout/settings-layout.component';
import { WelcomeComponent } from './page/settings-layout/welcome/welcome.component';
import { CallbackComponent } from './page/splash-layout/callback/callback.component';
import { ExternalComponent } from './page/splash-layout/external/external.component';
import { SplashLayoutComponent } from './page/splash-layout/splash-layout.component';

const routes: Routes = [
  {
    path: '',
    component: RawLandingLayoutComponent,
    data: { layout: 'raw-landing-layout' },
    children: [
      { path: '', component: HomeComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: 'maintenance', component: MaintenanceComponent },
      { path: 'signup-success', component: SignUpSuccessComponent },
      { path: 'verify-account', component: VerifyAccountComponent },
      { path: 'cookie-policy', component: CookiePolicyComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'product', component: ProductComponent },
      {
        path: '',
        component: LandingLayoutComponent,
        data: { layout: 'landing-layout' },
        children: [
          { path: 'signup', component: SignUpComponent },
          { path: 'login', component: LoginComponent },
          { path: 'forget-password', component: ForgetPasswordComponent },
          { path: 'reset-password', component: ResetPasswordComponent },
          { path: 'showroom', component: ShowroomComponent },
          { path: 'u/:username', component: PublicProfileComponent, data: { isPublic: true } },
        ]
      }
    ]
  },
  {
    path: 'callback',
    component: SplashLayoutComponent,
    data: { layout: 'splash-layout' },
    children: [
      { path: 'google', component: CallbackComponent, data: { oauth: environmentCommon.website.google } },
      { path: 'facebook', component: CallbackComponent, data: { oauth: environmentCommon.website.facebook } },
      { path: 'twitter', component: CallbackComponent, data: { oauth: environmentCommon.website.twitter } },
      { path: 'linkedin', component: CallbackComponent, data: { oauth: environmentCommon.website.linkedin } },
      { path: 'twitch', component: CallbackComponent, data: { oauth: environmentCommon.website.twitch } },
      { path: 'dribbble', component: CallbackComponent, data: { oauth: environmentCommon.website.dribbble } },
      { path: 'reddit', component: CallbackComponent, data: { oauth: environmentCommon.website.reddit } },
      { path: 'github', component: CallbackComponent, data: { oauth: environmentCommon.website.github } },
      { path: 'stripe', component: CallbackComponent, data: { payment: environmentCommon.website.stripe } }
    ]
  },
  {
    path: 'external',
    component: SplashLayoutComponent,
    data: { layout: 'splash-layout' },
    children: [
      { path: '', component: ExternalComponent }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    data: { layout: 'dashboard-layout' },
    children: [
      { path: '', component: DashboardComponent, canActivate: [ AuthGuard ] },
      { path: 'my-profile', component: MyProfileComponent, canActivate: [ AuthGuard ] },
      { path: 'contribute', component: CreateEventComponent, canActivate: [ AuthGuard ] },
      { path: 'learn', component: LearnComponent, canActivate: [ AuthGuard ] },
      { path: 'event', component: EventComponent, canActivate: [ AuthGuard ] },
      { path: 'privacy', component: MaintenanceComponent, canActivate: [ AuthGuard ] }
    ]
  },
  {
    path: 'settings',
    component: SettingsLayoutComponent,
    data: { layout: 'settings-layout' },
    children: [
      { path: 'welcome', component: WelcomeComponent, canActivate: [ AuthGuard ] },
      { path: 'edit-profile', component: EditProfileComponent, canActivate: [ AuthGuard ] },
      { path: 'edit-theme', component: EditThemeComponent, canActivate: [ AuthGuard ] },
    ]
  },
  {
    path: 'user',
    component: DashboardLayoutComponent,
    data: { layout: 'dashboard-layout' },
    children: [
      { path: ':username', component: PublicProfileComponent, canActivate: [ PublicProfileGuard ] }
    ]
  },
  // otherwise redirect to error
  { path: '**', redirectTo: 'not-found' }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes, { scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload' } ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
