export interface WebsiteModel {
  name: string
  logo?: string,
  cssClass: string,
  url?: string,
  companyUrl?: string,
  shareUrl?: string,
  callbackParams?: string[]
  tag?: string
  api?: { repo?: string, download?: string }
  publishableKey?: string
  version?: string
  clientId?: string
  env?: string
  websiteType: 'oauth' | 'payment' | 'file-storage' | 'mail' | 'sms' | 'analytics' | 'other'
}
