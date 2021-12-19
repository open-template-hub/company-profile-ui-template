import { environmentCommon } from '../../../environments/environment-common';
import { URLS } from '../navigation/navigation.data';

export const COMPANY_PAGES: { name: string, url: string, isExternal?: boolean }[] = [
  { name: $localize `:@@footer.about:About`, url: URLS.about},
  { name: $localize `:@@footer.customers:Customers`, url: URLS.customers },
  { name: $localize `:@@footer.partners:Partners`, url: URLS.partners },
  { name: $localize `:@@footer.branding:Branding`, url: URLS.branding },
  { name: $localize `:@@footer.jobs:Jobs`,
    url: environmentCommon.website.linkedin.companyUrl + '/' + environmentCommon.oth.social.linkedin + '/jobs',
    isExternal: true },
  { name: $localize `:@@footer.blog:Blog`, url: URLS.blog }
]
