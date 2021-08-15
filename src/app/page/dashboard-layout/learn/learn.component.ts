import { formatDate } from '@angular/common';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDayCalendarConfig } from 'ng2-date-picker';
import { ToastrService } from 'ngx-toastr';
import { BasicInfoService } from '../../../service/basic-info/basic-info.service';
import { CategoryService } from '../../../service/category/category.service';
import { EventService } from '../../../service/event/event.service';
import { InformationService } from '../../../service/information/information.service';
import { LoadingService } from '../../../service/loading/loading.service';
import { EventTypes, URLS } from '../../../util/constant';

@Component( {
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: [ './learn.component.scss' ]
} )
export class LearnComponent implements OnInit, OnDestroy {

  searchedEvents: any;
  recommendedEvents = [];
  submitted = false;
  loading = false;

  userSearchResults = [];
  categorySearchResults = [];
  eventSearchResults = [];
  searchEnabled = true;

  isSearchedWithCategory = false;

  todayDateTime = formatDate( new Date(), 'yyyy/MM/ddTHH:mmZ', 'en-US' );

  searchQuery = '';

  dayPickerConfig = {
    locale: 'en',
    format: 'yyyy/MM/DD HH:mm',
    firstDayOfWeek: 'mo',
    min: this.todayDateTime
  } as unknown as IDayCalendarConfig;

  URLS = URLS;

  userInterests = [];

  userInfo;

  @ViewChild( 'searchArea' )
  searchArea: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private categoryService: CategoryService,
    private loadingService: LoadingService,
    private toastService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private informationService: InformationService,
    private formBuilder: FormBuilder,
    private basicInfoService: BasicInfoService
  ) {
    this.eventService.recommendedEvents.subscribe( recommendedEvents => {
      this.recommendedEvents = recommendedEvents;
    } );
    this.eventService.searchedEvents.subscribe( searchedEvents => {
      this.searchedEvents = searchedEvents;
    } );
  }

  ngOnInit(): void {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
    this.route.queryParams.subscribe( params => {
      this.basicInfoService.userInfo.subscribe( userInfo => {
        this.userInfo = userInfo;
        // if params given
        this.userInterests = [];
        if ( params.category ) {
          this.isSearchedWithCategory = true;
          // reset search events.ts before search calling
          this.searchedEvents = [];
          const categories = [
            {
              category: +params.category,
              subCategory: +params[ 'sub-category' ],
              leafCategory: +params[ 'leaf-category' ]
            }
          ];
          this.eventService.search( undefined, undefined, new Date().toISOString(),
            undefined, categories, EventTypes.Searched ).subscribe();
        }
      } );
    } );
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

    let q = '';

    if (!event) {
      q = this.searchQuery;
    } else {
      q = event.target.value;
      this.searchQuery = q;
    }


    if ( this.activatedRoute.snapshot.queryParams.category ) {
      this.isSearchedWithCategory = false;
      this.router.navigate([]);
    }

    if ( !q || q.length < 3 ) {
      this.categorySearchResults = [];
      this.eventService.resetEvents( EventTypes.Searched );
      return;
    }

    this.categoryService.search( q ).subscribe( results => {
      this.categorySearchResults = results.slice( 0, 10 );
    } );

    this.eventService.search( undefined, undefined, new Date().toISOString(), q, [] )
    .subscribe( titleResults => {
      this.eventService.search(undefined, q, new Date().toISOString(), undefined, [])
      .subscribe(userResults => {
        this.searchedEvents = [...titleResults, ...userResults]
      });
    });
  }

  ngOnDestroy() {
    this.informationService.clearInformation();
    this.eventService.resetEvents( EventTypes.Searched );
  }
}

