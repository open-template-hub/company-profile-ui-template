import { environmentCommon } from '../../../environments/environment-common';
import { URLS } from '../navigation/navigation.data';

export const DEVELOPERS_PAGES: { name: string, url: string, isExternal?: boolean}[] = [
  { name: $localize `:@@footer.about:Open Source`,
    url: environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
    isExternal: true},
  { name: $localize `:@@footer.customers:Docs`, url: URLS.docs }
]
