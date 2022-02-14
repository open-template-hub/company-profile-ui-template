import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NAVIGATIONS } from './data/navigation/navigation.data';
import { NavigationInterceptor } from './interceptor/navigation/navigation.interceptor';
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
        path: NAVIGATIONS.contactUs.url,
        component: ContactUsPageComponent,
        canActivate: [ NavigationInterceptor ],
      },
      {
        path: NAVIGATIONS.sitemap.url,
        component: SitemapPageComponent,
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
    path: NAVIGATIONS.external.url,
    component: SplashLayoutComponent,
    children: [ { path: '', component: ExternalRedirectPageComponent } ],
  },
  // otherwise, redirect to error
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
