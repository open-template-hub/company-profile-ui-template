import { URLS } from '../navigation/navigation.data';

export const RESOURCES_PAGES: { name: string, url: string, isExternal?: boolean}[] = [
  { name: $localize `:@@footer.about:Support`, url: URLS.contactUs },
  { name: $localize `:@@footer.customers:Contact`, url: URLS.contactUs },
  { name: $localize `:@@footer.partners:Terms And Conditions`, url: URLS.terms },
  { name: $localize `:@@footer.partners:Privacy`, url: URLS.privacyPolicy },
  { name: $localize `:@@footer.partners:Cookies`, url: URLS.cookiePolicy },
  { name: $localize `:@@footer.partners:Sitemap`, url: URLS.sitemap }
]
