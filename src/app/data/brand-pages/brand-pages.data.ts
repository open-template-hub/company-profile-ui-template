import { environmentCommon } from '../../../environments/environment-common';

export const BRAND_PAGES: { url: string, icon: string}[] = [
  { url: environmentCommon.website.twitter.url + '/' + environmentCommon.oth.social.twitter,
    icon: environmentCommon.website.twitter.cssClass },
  { url: environmentCommon.website.github.url + '/' + environmentCommon.oth.social.github,
    icon: environmentCommon.website.github.cssClass },
  { url: environmentCommon.website.productHunt.url + '/' + environmentCommon.oth.social.productHunt,
    icon: environmentCommon.website.productHunt.cssClass },
  { url: environmentCommon.website.linkedin.companyUrl + '/' + environmentCommon.oth.social.linkedin,
    icon: environmentCommon.website.linkedin.cssClass },
  { url: environmentCommon.website.discord.companyUrl + '/' + environmentCommon.oth.social.discord,
    icon: environmentCommon.website.discord.cssClass }
]
