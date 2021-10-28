import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoMetaData } from 'src/app/model/seo/seo.model';
import { EMPLOYEES } from '../../data/employee/employee.data';

@Injectable( {
  providedIn: 'root',
} )
export class SeoService {
  constructor( private titleService: Title, private metaTagService: Meta ) {
  }

  getAuthors() {
    let authors = '';

    for ( const employee of EMPLOYEES ) {
      authors += employee.profile.name + ', ';
    }
    return authors.substring( 0, authors.length - 2 );
  }

  setMetaData = ( seo: SeoMetaData ) => {

    try {
      this.titleService.setTitle( seo.title );
      this.cleanUpMetaData();
      this.metaTagService.addTags( [
        { name: 'keywords', content: seo.keywords.join( ', ' ) },
        { name: 'robots', content: seo.robots.join( ', ' ) },
        { name: 'authors', content: this.getAuthors() },
        { name: 'description', content: seo.description },
        { charset: 'UTF-8' },
      ] );
    } catch ( e ) {
      console.warn( 'Unknown error occurred while setting Meta Tags ===> ', e );
    }
  };

  cleanUpMetaData = () => {
    this.metaTagService.removeTag( 'name=keywords' );
    this.metaTagService.removeTag( 'name=robots' );
    this.metaTagService.removeTag( 'name=authors' );
    this.metaTagService.removeTag( 'name=description' );
  };
}
