import { Injectable } from '@angular/core';
import { NpmPackages, OthStartDate } from 'src/app/data/constant';
import { environmentCommon } from '../../../environments/environment-common';
import { UtilService } from '../util/util.service';

@Injectable( {
  providedIn: 'root',
} )
export class NpmProviderService {
  constructor( private util: UtilService ) {
  }

  getNpmPackagesDownloadCount = async () => {
    const today = this.util.formatDate( new Date() );
    let count = 0;
    for ( const p of NpmPackages ) {
      const uri = `${ environmentCommon.website.npm.api.download }/${ OthStartDate }:${ today }/${ p }`;

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
