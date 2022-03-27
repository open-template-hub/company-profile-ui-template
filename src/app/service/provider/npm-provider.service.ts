import { Injectable } from '@angular/core';
import { environmentCommon } from '../../../environments/environment-common';
import { BRAND } from '../../data/brand/brand.data';
import { LIBRARIES, PRODUCT_LINES } from '../../data/product/product.data';
import { UtilService } from '../util/util.service';

@Injectable( {
  providedIn: 'root',
} )
export class NpmProviderService {

  PRODUCT_LINES = PRODUCT_LINES;
  LIBRARIES = LIBRARIES;

  constructor( private util: UtilService ) {
    // Intentionally blank
  }

  getNpmPackagesDownloadCount = async () => {
    const today = this.util.formatDate( new Date() );
    let count = 0;
    for ( const system of [ PRODUCT_LINES, LIBRARIES ] ) {
      for ( const productLine of system ) {
        for ( const product of productLine.products ) {
          if ( product.hasNpmPackage ) {
            const uri = `${ environmentCommon.website.npm.api.download }/${ BRAND.establishDate }:${ today }/${ environmentCommon.oth.social.npm }/${ product.key }`;

            // Using Xml Http Request because http.get cause CORS issue
            const response = await this.util.corsRequest( uri );
            if ( response != null ) {
              const json = JSON.parse( response as string );
              count += json.downloads;
            }
          }
        }
      }
    }
    return count;
  };
}
