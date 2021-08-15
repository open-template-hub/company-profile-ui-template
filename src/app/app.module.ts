import { LayoutModule } from '@angular/cdk/layout';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DpDatePickerModule } from 'ng2-date-picker';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventHamburgerMenuComponent } from './component/common/block/event-hamburger-menu/event-hamburger-menu.component';
import { EventDataComponent } from './component/common/block/event-data/event-data.component';
import { LabelDataComponent } from './component/common/block/label-data/label-data.component';
import { LabelWithIconDataComponent } from './component/common/block/label-with-icon-data/label-with-icon-data.component';
import { Button1Component } from './component/common/button/button1/button1.component';
import { SocialButtonComponent } from './component/common/button/social-button/social-button.component';
import { Card1Component } from './component/common/card/card1/card1.component';
import { EventCardComponent } from './component/common/card/event-card/event-card.component';
import { BottomNavComponent } from './component/nav/common/bottom-nav/bottom-nav.component';
import { FooterComponent } from './component/nav/common/footer/footer.component';
import { DashboardLayoutSideNavComponent } from './component/nav/dashboard/dashboard-layout-side-nav/dashboard-layout-side-nav.component';
import { DashboardLayoutTopNavComponent } from './component/nav/dashboard/dashboard-layout-top-nav/dashboard-layout-top-nav.component';
import { LandingLayoutTopNavComponent } from './component/nav/landing/landing-layout-top-nav/landing-layout-top-nav.component';
import { EventComponent } from './page/dashboard-layout/event/event.component';
import { CreateEventComponent } from './page/dashboard-layout/createEvent/create-event.component';
import { DashboardLayoutComponent } from './page/dashboard-layout/dashboard-layout.component';

import { DashboardComponent } from './page/dashboard-layout/dashboard/dashboard.component';
import { LearnComponent } from './page/dashboard-layout/learn/learn.component';
import { PublicProfileComponent } from './page/dashboard-layout/public-profile/public-profile.component';
import { SideContentComponent } from './page/dashboard-layout/side-content/side-content.component';
import { ForgetPasswordComponent } from './page/landing-layout/forget-password/forget-password.component';
import { LandingLayoutComponent } from './page/landing-layout/landing-layout.component';
import { LoginComponent } from './page/landing-layout/login/login.component';
import { ResetPasswordComponent } from './page/landing-layout/reset-password/reset-password.component';
import { ShowroomComponent } from './page/landing-layout/showroom/showroom.component';
import { SignUpComponent } from './page/landing-layout/sign-up/sign-up.component';
import { CookiePolicyComponent } from './page/raw-landing-layout/cookie-policy/cookie-policy.component';
import { HomeComponent } from './page/raw-landing-layout/home/home.component';
import { LoadingComponent } from './page/raw-landing-layout/loading/loading.component';
import { MaintenanceComponent } from './page/raw-landing-layout/maintenance/maintenance.component';
import { NotFoundComponent } from './page/raw-landing-layout/not-found/not-found.component';
import { PrivacyPolicyComponent } from './page/raw-landing-layout/privacy-policy/privacy-policy.component';
import { RawLandingLayoutComponent } from './page/raw-landing-layout/raw-landing-layout.component';
import { SignUpSuccessComponent } from './page/raw-landing-layout/sign-up-success/sign-up-success.component';
import { TermsComponent } from './page/raw-landing-layout/terms/terms.component';
import { VerifyAccountComponent } from './page/raw-landing-layout/verify-account/verify-account.component';
import { EditProfileComponent } from './page/settings-layout/edit-profile/edit-profile.component';
import { SettingsLayoutComponent } from './page/settings-layout/settings-layout.component';
import { WelcomeComponent } from './page/settings-layout/welcome/welcome.component';
import { CallbackComponent } from './page/splash-layout/callback/callback.component';
import { SplashLayoutComponent } from './page/splash-layout/splash-layout.component';
import { CookiePopupComponent } from './component/popup/cookie-popup/cookie-popup.component';
import { RequestInterceptor } from './interceptor/request/request.interceptor';
import { ResponseInterceptor } from './interceptor/response/response.interceptor';
import { MyProfileComponent } from './page/dashboard-layout/my-profile/my-profile.component';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarComponent } from './component/common/calendar/calendar.component';
import { SearchComponent } from './component/common/search/search.component';
import { RateBarComponent } from './component/common/rate-bar/rate-bar.component';

FullCalendarModule.registerPlugins( [
  dayGridPlugin,
  interactionPlugin
] )

@NgModule( {
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    SignUpComponent,
    SignUpSuccessComponent,
    VerifyAccountComponent,
    RawLandingLayoutComponent,
    LandingLayoutComponent,
    DashboardLayoutComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    LandingLayoutTopNavComponent,
    DashboardLayoutSideNavComponent,
    BottomNavComponent,
    FooterComponent,
    Card1Component,
    Button1Component,
    SplashLayoutComponent,
    CallbackComponent,
    SocialButtonComponent,
    WelcomeComponent,
    LabelDataComponent,
    DashboardLayoutTopNavComponent,
    EditProfileComponent,
    LabelWithIconDataComponent,
    NotFoundComponent,
    LearnComponent,
    MaintenanceComponent,
    CookiePopupComponent,
    CreateEventComponent,
    EventCardComponent,
    CookiePolicyComponent,
    PrivacyPolicyComponent,
    TermsComponent,
    PublicProfileComponent,
    LoadingComponent,
    EventDataComponent,
    SettingsLayoutComponent,
    SideContentComponent,
    ShowroomComponent,
    MyProfileComponent,
    EventComponent,
    EventHamburgerMenuComponent,
    CalendarComponent,
    SearchComponent,
    RateBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot( { preventDuplicates: true } ),
    LayoutModule,
    FlexLayoutModule,
    ImageCropperModule,
    TooltipModule,
    DpDatePickerModule,
    FormsModule,
    BrowserModule,
    FullCalendarModule
    /*HttpClientInMemoryWebApiModule.forRoot(
     InMemoryDataService, { dataEncapsulation: false } )*/
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
