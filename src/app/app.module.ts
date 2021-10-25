import { LayoutModule } from '@angular/cdk/layout';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { DpDatePickerModule } from 'ng2-date-picker';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MarkdownModule } from 'ngx-markdown';
import { ToastrModule } from 'ngx-toastr';
import { SwiperModule } from 'swiper/angular';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AnimatedCodeEditorComponent } from './component/animated-code-editor/animated-code-editor.component';
import { BrandButtonComponent } from './component/button/brand-button/brand-button.component';
import { ButtonComponent } from './component/button/button.component';
import { EventButtonComponent } from './component/button/event-button/event-button.component';
import { InformationButtonComponent } from './component/button/information-button/information-button.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { ActivityHistoryCardComponent } from './component/card/activity-history-card/activity-history-card.component';
import { CardComponent } from './component/card/card.component';
import { EmployeeCardComponent } from './component/card/employee-card/employee-card.component';
import { EventCardComponent } from './component/card/event-card/event-card.component';
import { FeatureCardComponent } from './component/card/feature-card/feature-card.component';
import { PolicyCardComponent } from './component/card/policy-card/policy-card.component';
import { PresentationCardComponent } from './component/card/presentation-card/presentation-card.component';
import { PricingCardComponent } from './component/card/pricing-card/pricing-card.component';
import { StatusCardComponent } from './component/card/status-card/status-card.component';
import { TestimonialCardComponent } from './component/card/testimonial-card/testimonial-card.component';
import { TimelineCardComponent } from './component/card/timeline-card/timeline-card.component';
import { ColorChartComponent } from './component/color-chart/color-chart.component';
import { CommandLineComponent } from './component/command-line/command-line.component';
import { BoxContentLoaderComponent } from './component/content-loader/box-content-loader/box-content-loader.component';
import { ContentLoaderComponent } from './component/content-loader/content-loader.component';
import { ImageContentLoaderComponent } from './component/content-loader/image-content-loader/image-content-loader.component';
import { TextContentLoaderComponent } from './component/content-loader/text-content-loader/text-content-loader.component';
import { CounterBordersTopSvgComponent } from './component/design/top-svg/counter-borders-top-svg/counter-borders-top-svg.component';
import { DefaultTopSvgComponent } from './component/design/top-svg/default-top-svg/default-top-svg.component';
import { LeafTopSvgComponent } from './component/design/top-svg/leaf-top-svg/leaf-top-svg.component';
import { SharpTopSvgComponent } from './component/design/top-svg/sharp-top-svg/sharp-top-svg.component';
import { TopSvgComponent } from './component/design/top-svg/top-svg.component';
import { DropdownMenuComponent } from './component/dropdown-menu/dropdown-menu.component';
import { ExtLinkComponent } from './component/ext-link/ext-link.component';
import { HeroComponent } from './component/hero/hero.component';
import { EventDataComponent } from './component/label/deprecated/event-data/event-data.component';
import { EventHamburgerMenuComponent } from './component/label/deprecated/event-hamburger-menu/event-hamburger-menu.component';
import { LabelDataComponent } from './component/label/deprecated/label-data/label-data.component';
import { LabelWithIconDataComponent } from './component/label/deprecated/label-with-icon-data/label-with-icon-data.component';
import { LedComponent } from './component/led/led.component';
import { BottomNavComponent } from './component/nav/bottom-nav/bottom-nav.component';
import { DashboardLayoutSideNavComponent } from './component/nav/dashboard/dashboard-layout-side-nav/dashboard-layout-side-nav.component';
import { DashboardLayoutTopNavComponent } from './component/nav/dashboard/dashboard-layout-top-nav/dashboard-layout-top-nav.component';
import { FooterComponent } from './component/nav/footer/footer.component';
import { LandingLayoutTopNavComponent } from './component/nav/landing/landing-layout-top-nav/landing-layout-top-nav.component';
import { CookiePopupComponent } from './component/popup/cookie-popup/cookie-popup.component';
import { PricePlanComponent } from './component/price-plan/price-plan.component';
import { ProductPresentationComponent } from './component/product-represantation/product-presentation.component';
import { RateBarComponent } from './component/rate-bar/rate-bar.component';
import { SearchComponent } from './component/search/search.component';
import { SideContentComponent } from './component/side-content/side-content.component';
import { BusinessPartnerSwiperComponent } from './component/swiper/business-partner-swiper/business-partner-swiper.component';
import { PresentationSwiperComponent } from './component/swiper/presentation-swiper/presentation-swiper.component';
import { RequestInterceptor } from './interceptor/request/request.interceptor';
import { ResponseInterceptor } from './interceptor/response/response.interceptor';
import { OthComponent } from './oth/oth.component';
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
import { SitemapPageComponent } from './page/landing-layout/sitemap-page/sitemap-page.component';
import { StatusPageComponent } from './page/landing-layout/status-page/status-page.component';
import { EditThemePageComponent } from './page/settings-layout/edit-theme-page/edit-theme-page.component';
import { SettingsLayoutComponent } from './page/settings-layout/settings-layout.component';
import { CallbackPageComponent } from './page/splash-layout/callback-page/callback-page.component';
import { ExternalRedirectPageComponent } from './page/splash-layout/external-redirect-page/external-redirect-page.component';
import { SplashLayoutComponent } from './page/splash-layout/splash-layout.component';
import { CustomersPageComponent } from './page/landing-layout/customers-page/customers-page.component';
import { AssetCardComponent } from './component/card/asset-card/asset-card.component';
import { BlogPageComponent } from './page/landing-layout/blog-page/blog-page.component';
import { BlogCardComponent } from './component/card/blog-card/blog-card.component';
import { DocsPageComponent } from './page/landing-layout/docs-page/docs-page.component';
import { DocCardComponent } from './component/card/doc-card/doc-card.component';
import { PartnersPageComponent } from './page/landing-layout/partners-page/partners-page.component';
import { BlogHolderCardComponent } from './component/card/blog-holder-card/blog-holder-card.component';
import { BlogContentPageComponent } from './page/landing-layout/blog-page/blog-content-page/blog-content-page.component';
import { ScreenshotSwiperComponent } from './component/swiper/screenshot-swiper/screenshot-swiper.component';
import { TechStackCardComponent } from './component/card/tech-stack-card/tech-stack-card.component';

FullCalendarModule.registerPlugins( [
  dayGridPlugin,
  interactionPlugin
] );

@NgModule( {
  declarations: [
    OthComponent,
    HomePageComponent,
    LoginPageComponent,
    DashboardPageComponent,
    SignUpPageComponent,
    SignUpSuccessPageComponent,
    VerifyAccountPageComponent,
    LandingLayoutComponent,
    DashboardLayoutComponent,
    ResetPasswordPageComponent,
    ForgetPasswordPageComponent,
    LandingLayoutTopNavComponent,
    DashboardLayoutSideNavComponent,
    BottomNavComponent,
    FooterComponent,
    SplashLayoutComponent,
    CallbackPageComponent,
    LabelDataComponent,
    DashboardLayoutTopNavComponent,
    LabelWithIconDataComponent,
    NotFoundPageComponent,
    LearnPageComponent,
    MaintenancePageComponent,
    CookiePopupComponent,
    CreateEventPageComponent,
    CookiePolicyPageComponent,
    PrivacyPolicyPageComponent,
    TermsPageComponent,
    PublicProfilePageComponent,
    EventDataComponent,
    SettingsLayoutComponent,
    SideContentComponent,
    MyProfilePageComponent,
    EventPageComponent,
    EventHamburgerMenuComponent,
    CalendarComponent,
    SearchComponent,
    RateBarComponent,
    EditThemePageComponent,
    PricingPageComponent,
    PricingCardComponent,
    TestimonialCardComponent,
    DropdownMenuComponent,
    EditThemePageComponent,
    ColorChartComponent,
    ProductPageComponent,
    ExtLinkComponent,
    ExternalRedirectPageComponent,
    AboutUsPageComponent,
    PricePlanComponent,
    ContactUsPageComponent,
    AnimatedCodeEditorComponent,
    CommandLineComponent,
    StatusPageComponent,
    ProductPresentationComponent,
    CardComponent,
    EmployeeCardComponent,
    ProductPresentationComponent,
    StatusCardComponent,
    PolicyCardComponent,
    TimelineCardComponent,
    ButtonComponent,
    BrandButtonComponent,
    InformationButtonComponent,
    BrandingPageComponent,
    PresentationCardComponent,
    HeroComponent,
    EventButtonComponent,
    EventCardComponent,
    ActivityHistoryCardComponent,
    ContentLoaderComponent,
    ImageContentLoaderComponent,
    TextContentLoaderComponent,
    BoxContentLoaderComponent,
    LedComponent,
    BusinessPartnerSwiperComponent,
    PresentationSwiperComponent,
    SitemapPageComponent,
    FeatureCardComponent,
    SharpTopSvgComponent,
    DefaultTopSvgComponent,
    CounterBordersTopSvgComponent,
    TopSvgComponent,
    LeafTopSvgComponent,
    CustomersPageComponent,
    AssetCardComponent,
    BlogPageComponent,
    BlogCardComponent,
    DocsPageComponent,
    DocCardComponent,
    PartnersPageComponent,
    BlogHolderCardComponent,
    BlogContentPageComponent,
    ScreenshotSwiperComponent,
    TechStackCardComponent,
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
    MarkdownModule.forRoot( { loader: HttpClient }),
    GoogleTagManagerModule.forRoot( { id: environment.analytics.google.tag } ),
    ServiceWorkerModule.register( 'ngsw-worker.js', {
      enabled: [ 'production', 'staging' ].includes( environment.identity ),
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately'
    } )
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
