import { LayoutModule } from '@angular/cdk/layout';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { DpDatePickerModule } from 'ng2-date-picker';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ToastrModule } from 'ngx-toastr';
import { SwiperModule } from 'swiper/angular';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './component/calendar/calendar.component';
import { EventDataComponent } from './component/common/block/event-data/event-data.component';
import { EventHamburgerMenuComponent } from './component/common/block/event-hamburger-menu/event-hamburger-menu.component';
import { LabelDataComponent } from './component/common/block/label-data/label-data.component';
import { LabelWithIconDataComponent } from './component/common/block/label-with-icon-data/label-with-icon-data.component';
import { Button1Component } from './component/common/button/button1/button1.component';
import { SocialButtonComponent } from './component/common/button/social-button/social-button.component';
import { Card1Component } from './component/common/card/card1/card1.component';
import { EventCardComponent } from './component/common/card/event-card/event-card.component';
import { PricingCardComponent } from './component/common/card/pricing-card/pricing-card.component';
import { TestimonialCardComponent } from './component/common/card/testimonial-card/testimonial-card.component';
import { ColorChartComponent } from './component/common/color-chart/color-chart.component';
import { DropdownMenuComponent } from './component/common/dropdown-menu/dropdown-menu.component';
import { ExtLinkComponent } from './component/common/ext-link/ext-link.component';
import { RateBarComponent } from './component/common/rate-bar/rate-bar.component';
import { SearchComponent } from './component/common/search/search.component';
import { SwiperWrapperComponent } from './component/common/swiper-wrapper/swiper-wrapper.component';
import { BottomNavComponent } from './component/nav/common/bottom-nav/bottom-nav.component';
import { FooterComponent } from './component/nav/common/footer/footer.component';
import { DashboardLayoutSideNavComponent } from './component/nav/dashboard/dashboard-layout-side-nav/dashboard-layout-side-nav.component';
import { DashboardLayoutTopNavComponent } from './component/nav/dashboard/dashboard-layout-top-nav/dashboard-layout-top-nav.component';
import { LandingLayoutTopNavComponent } from './component/nav/landing/landing-layout-top-nav/landing-layout-top-nav.component';
import { CookiePopupComponent } from './component/popup/cookie-popup/cookie-popup.component';
import { TimelineComponent } from './component/timeline/timeline.component';
import { RequestInterceptor } from './interceptor/request/request.interceptor';
import { ResponseInterceptor } from './interceptor/response/response.interceptor';
import { OthComponent } from './oth/oth.component';
import { CreateEventComponent } from './page/dashboard-layout/create-event/create-event.component';
import { DashboardLayoutComponent } from './page/dashboard-layout/dashboard-layout.component';

import { DashboardComponent } from './page/dashboard-layout/dashboard/dashboard.component';
import { EventComponent } from './page/dashboard-layout/event/event.component';
import { LearnComponent } from './page/dashboard-layout/learn/learn.component';
import { MyProfileComponent } from './page/dashboard-layout/my-profile/my-profile.component';
import { PublicProfileComponent } from './page/dashboard-layout/public-profile/public-profile.component';
import { SideContentComponent } from './page/dashboard-layout/side-content/side-content.component';
import { AboutUsComponent } from './page/landing-layout/about-us/about-us.component';
import { CookiePolicyComponent } from './page/landing-layout/cookie-policy/cookie-policy.component';
import { ForgetPasswordComponent } from './page/landing-layout/forget-password/forget-password.component';
import { HomeComponent } from './page/landing-layout/home/home.component';
import { LandingLayoutComponent } from './page/landing-layout/landing-layout.component';
import { LoginComponent } from './page/landing-layout/login/login.component';
import { MaintenanceComponent } from './page/landing-layout/maintenance/maintenance.component';
import { NotFoundComponent } from './page/landing-layout/not-found/not-found.component';
import { PricingComponent } from './page/landing-layout/pricing/pricing.component';
import { PrivacyPolicyComponent } from './page/landing-layout/privacy-policy/privacy-policy.component';
import { ProductComponent } from './page/landing-layout/product/product.component';
import { ResetPasswordComponent } from './page/landing-layout/reset-password/reset-password.component';
import { ShowroomComponent } from './page/landing-layout/showroom/showroom.component';
import { SignUpSuccessComponent } from './page/landing-layout/sign-up-success/sign-up-success.component';
import { SignUpComponent } from './page/landing-layout/sign-up/sign-up.component';
import { TermsComponent } from './page/landing-layout/terms/terms.component';
import { VerifyAccountComponent } from './page/landing-layout/verify-account/verify-account.component';
import { EditProfileComponent } from './page/settings-layout/edit-profile/edit-profile.component';
import { EditThemeComponent } from './page/settings-layout/edit-theme/edit-theme.component';
import { SettingsLayoutComponent } from './page/settings-layout/settings-layout.component';
import { CallbackComponent } from './page/splash-layout/callback/callback.component';
import { ExternalComponent } from './page/splash-layout/external/external.component';
import { SplashLayoutComponent } from './page/splash-layout/splash-layout.component';
import { ContactUsComponent } from './page/landing-layout/contact-us/contact-us.component';
import { AnimatedCodeEditorComponent } from './component/animated-code-editor/animated-code-editor.component';

FullCalendarModule.registerPlugins( [
  dayGridPlugin,
  interactionPlugin
] );

@NgModule( {
  declarations: [
    OthComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    SignUpComponent,
    SignUpSuccessComponent,
    VerifyAccountComponent,
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
    EventDataComponent,
    SettingsLayoutComponent,
    SideContentComponent,
    ShowroomComponent,
    MyProfileComponent,
    EventComponent,
    EventHamburgerMenuComponent,
    CalendarComponent,
    SearchComponent,
    RateBarComponent,
    EditThemeComponent,
    PricingComponent,
    PricingCardComponent,
    TestimonialCardComponent,
    DropdownMenuComponent,
    EditThemeComponent,
    SwiperWrapperComponent,
    ColorChartComponent,
    ProductComponent,
    ExtLinkComponent,
    ExternalComponent,
    TimelineComponent,
    AboutUsComponent,
    ContactUsComponent,
    AnimatedCodeEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    LayoutModule,
    ImageCropperModule,
    TooltipModule,
    DpDatePickerModule,
    FormsModule,
    BrowserModule,
    FullCalendarModule,
    SwiperModule,
    ToastrModule.forRoot( { preventDuplicates: true } ),
    GoogleTagManagerModule.forRoot( { id: environment.analytics.google.tag } )
    /*HttpClientInMemoryWebApiModule.forRoot(
     InMemoryDataService, { dataEncapsulation: false } )*/
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
  ],
  bootstrap: [ OthComponent ]
} )
export class AppModule {
}
