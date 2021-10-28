import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { URLS } from '../../data/navigation/navigation.data';
import { BusinessLogicService } from '../../service/business-logic/business-logic.service';
import { CategoryService } from '../../service/category/category.service';
import { EventService } from '../../service/event/event.service';

@Component( {
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.scss' ]
} )
export class SearchComponent {
  userSearchResults = [];
  categorySearchResults = [];
  eventSearchResults = [];
  searchEnabled = true;
  URLS = URLS;

  @ViewChild( 'searchArea' )
  searchArea: ElementRef;

  constructor(
      private eventService: EventService,
      private businessLogicService: BusinessLogicService,
      private categoryService: CategoryService
  ) {
  }

  @HostListener( 'document:click', [ '$event' ] )
  onDocumentClick( event ) {
    if ( this.searchArea?.nativeElement.contains( event.target ) ) {
      this.searchEnabled = true;
    } else {
      this.searchEnabled = false;
    }
  }

  search( event: any ) {
    const q = event.target.value;

    if ( !q || q.length < 3 ) {
      this.userSearchResults = [];
      this.categorySearchResults = [];
      return;
    }

    this.businessLogicService.search( q ).subscribe( results => {
      this.userSearchResults = results.slice( 0, 10 );
    } );

    this.categoryService.search( q ).subscribe( results => {
      this.categorySearchResults = results.slice( 0, 10 );
    } );

    this.eventService.search( undefined, undefined, new Date().toISOString(), q, [] )
    .subscribe( results => {
      this.eventSearchResults = results;
    } );
  }

}
