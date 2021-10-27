import { Injectable } from '@angular/core';
import { environmentCommon } from '../../../environments/environment-common';
import { Activity } from '../../model/activity/activity.model';
import { UtilService } from '../util/util.service';

@Injectable( {
  providedIn: 'root',
} )
export class GithubProviderService {

  GITHUB_DATA = {
    stars: $localize`:@@githubCounters.stars:Stars`,
    forks: $localize`:@@githubCounters.forks:Forks`,
    subscribers: $localize`:@@githubCounters.subscribers:Subscribers`,
    releaseVersion: $localize`:@@githubCounters.releaseVersion:Release Version`
  };

  constructor( private util: UtilService ) {
    // Intentionally blank
  }

  getGithubCounters = async ( productKey: string ) => {
    const uri = `${ environmentCommon.website.github.api.repo }/${ environmentCommon.oth.social.github }/${ productKey }`;

    const counters = [];

    // Using Xml Http Request because http.get cause CORS issue
    const releaseVersion = await this.getReleaseVersion( productKey );
    if ( releaseVersion != null ) {
      counters.push( {
        name: this.GITHUB_DATA.releaseVersion,
        value: releaseVersion,
      } );
    }

    const response = await this.util.corsRequest( uri );
    if ( response != null ) {
      const json = JSON.parse( response as string );
      counters.push( {
        name: this.GITHUB_DATA.stars,
        value: json.stargazers_count ? json.stargazers_count : '0',
      } );

      counters.push( {
        name: this.GITHUB_DATA.forks,
        value: json.forks_count ? json.forks_count : '0',
      } );

      counters.push( {
        name: this.GITHUB_DATA.subscribers,
        value: json.subscribers_count ? json.subscribers_count : '0',
      } );
    }
    return counters;
  };

  getReleaseVersion = async ( productKey: string ) => {
    const uri = `${ environmentCommon.website.github.api.repo }/${ environmentCommon.oth.social.github }/${ productKey }/releases`;
    const response = await this.util.corsRequest( uri );
    if ( response != null ) {
      const json = JSON.parse( response as string );
      return json[ 0 ]?.name;
    }

    return null;
  };

  getCommitHistory = async ( productKey: string ) => {
    const today = new Date();
    const lastYear = new Date( today.getFullYear() - 1, today.getMonth(), today.getDate() );

    const uri = `${ environmentCommon.website.github.api.repo }/${ environmentCommon.oth.social.github }/${ productKey }/commits?per_page=100&since=${ lastYear.toISOString() }`;
    const response = await this.util.corsRequest( uri );
    if ( response != null ) {
      const json: any[] = JSON.parse( response as string );
      return json.map( item => {
        const activity: Activity = { type: 'commit', date: new Date( item.commit?.committer?.date ), payload: item.sha };
        return activity;
      } );
    }

    return null;
  };
}
