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
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
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
import { ActivityHistoryCardComponent } from './component/card/activity-history-card/activity-history-card.component';
import { AssetCardComponent } from './component/card/asset-card/asset-card.component';
import { BlogCardComponent } from './component/card/blog-card/blog-card.component';
import { BlogHolderCardComponent } from './component/card/blog-holder-card/blog-holder-card.component';
import { CardComponent } from './component/card/card.component';
import { ContactInformationCardComponent } from './component/card/contact-information-card/contact-information-card.component';
import { DocCardComponent } from './component/card/doc-card/doc-card.component';
import { DocHolderCardComponent } from './component/card/doc-holder-card/doc-holder-cardcomponent';
import { EmployeeCardComponent } from './component/card/employee-card/employee-card.component';
import { FeatureCardComponent } from './component/card/feature-card/feature-card.component';
import { PolicyCardComponent } from './component/card/policy-card/policy-card.component';
import { PresentationCardComponent } from './component/card/presentation-card/presentation-card.component';
import { PricingCardComponent } from './component/card/pricing-card/pricing-card.component';
import { TechStackCardComponent } from './component/card/tech-stack-card/tech-stack-card.component';
import { TestimonialCardComponent } from './component/card/testimonial-card/testimonial-card.component';
import { StepTimelineCardComponent } from './component/card/timeline-card/step-timeline-card/step-timeline-card.component';
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
import { LedComponent } from './component/led/led.component';
import { BottomNavComponent } from './component/nav/bottom-nav/bottom-nav.component';
import { FooterComponent } from './component/nav/footer/footer.component';
import { LandingLayoutTopNavComponent } from './component/nav/landing/landing-layout-top-nav/landing-layout-top-nav.component';
import { CookiePopupComponent } from './component/popup/cookie-popup/cookie-popup.component';
import { PricePlanComponent } from './component/price-plan/price-plan.component';
import { ProductPresentationComponent } from './component/product-represantation/product-presentation.component';
import { BusinessPartnerSwiperComponent } from './component/swiper/business-partner-swiper/business-partner-swiper.component';
import { PresentationSwiperComponent } from './component/swiper/presentation-swiper/presentation-swiper.component';
import { ScreenshotSwiperComponent } from './component/swiper/screenshot-swiper/screenshot-swiper.component';
import { RequestInterceptor } from './interceptor/request/request.interceptor';
import { ResponseInterceptor } from './interceptor/response/response.interceptor';
import { OthComponent } from './oth/oth.component';
import { AboutUsPageComponent } from './page/landing-layout/about-us-page/about-us-page.component';
import { BlogContentPageComponent } from './page/landing-layout/blog-page/blog-content-page/blog-content-page.component';
import { BlogPageComponent } from './page/landing-layout/blog-page/blog-page.component';
import { BrandingPageComponent } from './page/landing-layout/branding-page/branding-page.component';
import { ContactUsPageComponent } from './page/landing-layout/contact-us-page/contact-us-page.component';
import { CustomersPageComponent } from './page/landing-layout/customers-page/customers-page.component';
import { DocsContentPageComponent } from './page/landing-layout/docs-page/docs-content-page/docs-content-page.component';
import { DocsPageComponent } from './page/landing-layout/docs-page/docs-page.component';
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
import { SitemapPageComponent } from './page/landing-layout/sitemap-page/sitemap-page.component';
import { ExternalRedirectPageComponent } from './page/splash-layout/external-redirect-page/external-redirect-page.component';
import { SplashLayoutComponent } from './page/splash-layout/splash-layout.component';

FullCalendarModule.registerPlugins( [
  dayGridPlugin,
  interactionPlugin
] );

@NgModule( {
  declarations: [
    OthComponent,
    HomePageComponent,
    LandingLayoutComponent,
    LandingLayoutTopNavComponent,
    BottomNavComponent,
    FooterComponent,
    SplashLayoutComponent,
    NotFoundPageComponent,
    MaintenancePageComponent,
    CookiePopupComponent,
    CookiePolicyPageComponent,
    PrivacyPolicyPageComponent,
    TermsPageComponent,
    PricingPageComponent,
    PricingCardComponent,
    TestimonialCardComponent,
    DropdownMenuComponent,
    ColorChartComponent,
    ProductPageComponent,
    ExtLinkComponent,
    ExternalRedirectPageComponent,
    AboutUsPageComponent,
    PricePlanComponent,
    ContactUsPageComponent,
    AnimatedCodeEditorComponent,
    CommandLineComponent,
    ProductPresentationComponent,
    CardComponent,
    EmployeeCardComponent,
    ProductPresentationComponent,
    PolicyCardComponent,
    TimelineCardComponent,
    ButtonComponent,
    BrandButtonComponent,
    InformationButtonComponent,
    BrandingPageComponent,
    PresentationCardComponent,
    HeroComponent,
    EventButtonComponent,
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
    DocHolderCardComponent,
    DocsContentPageComponent,
    StepTimelineCardComponent,
    ContactInformationCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    BrowserModule,
    FullCalendarModule,
    SwiperModule,
    ToastrModule.forRoot( { preventDuplicates: true } ),
    MarkdownModule.forRoot( { loader: HttpClient } ),
    GoogleTagManagerModule.forRoot( { id: environment.analytics.googleAnalytics.tag } ),
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
