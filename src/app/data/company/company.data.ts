import { URLS } from '../navigation/navigation.data';

export const COMPANY_PAGES: { name: string, url: string}[] = [
  { name: $localize `:@@footer.about:About`, url: URLS.about},
  { name: $localize `:@@footer.customers:Customers`, url: URLS.customers },
  { name: $localize `:@@footer.partners:Partners`, url: URLS.partners },
  { name: $localize `:@@footer.branding:Branding`, url: URLS.branding }
]
