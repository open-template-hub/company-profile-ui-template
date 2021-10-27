import { Injectable } from '@angular/core';
import { environmentCommon } from '../../../environments/environment-common';
import { BRAND } from '../../data/brand/brand.data';
import { UtilService } from '../util/util.service';

@Injectable( {
  providedIn: 'root',
} )
export class NpmProviderService {

  NPM_PACKAGES_LIST = [
    'server-generator',
    'common',
    'app-generator',
  ];

  constructor( private util: UtilService ) {
    // Intentionally blank
  }

  getNpmPackagesDownloadCount = async () => {
    const today = this.util.formatDate( new Date() );
    let count = 0;
    for ( const npmPackage of this.NPM_PACKAGES_LIST ) {
      const uri = `${ environmentCommon.website.npm.api.download }/${ BRAND.establishDate }:${ today }/${ environmentCommon.oth.social.npm }/${ npmPackage }`;

      // Using Xml Http Request because http.get cause CORS issue
      const response = await this.util.corsRequest( uri );
      if ( response != null ) {
        const json = JSON.parse( response as string );
        count += json.downloads;
      }
    }
    return count;
  };
}
