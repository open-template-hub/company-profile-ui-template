import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { createEvent, DateArray, EventAttributes } from 'ics';
import { environment } from 'src/environments/environment';
import { EventService } from '../../../../service/event/event.service';
import { InformationService } from '../../../../service/information/information.service';
import { LoadingService } from '../../../../service/loading/loading.service';
import { PaymentService } from '../../../../service/payment/payment.service';
import { UserActivityService } from '../../../../service/user-activity/user-activity.service';
import { URLS } from '../../../../util/constant';

@Component( {
  selector: 'app-event-data',
  templateUrl: './event-data.component.html',
  styleUrls: [ './event-data.component.scss' ]
} )
export class EventDataComponent implements OnInit {
  selectedRate = 0;
  environment = environment;

  @Input() title: string = undefined;
  @Input() user: any = undefined;
  @Input() date: string = undefined;
  @Input() description: string = undefined;
  @Input() link: string = undefined;
  @Input() category: any = undefined;
  @Input() subCategory: any = undefined;
  @Input() leafCategory: any = undefined;
  @Input() isLastItem: boolean = undefined;
  @Input() isBackgroundColor = false;
  @Input() isTitleClickable = false;
  @Input() isSmallTitle = false;
  @Input() id;
  @Input() attendeeButton = false;
  @Input() dropButton = false;
  @Input() duration = undefined;
  @Input() count = undefined;
  @Input() price = undefined;
  @Input() isEditable = false;
  @Input() showCalendar = false;
  @Input() isEmailAllowed = false;
  @Input() isPublicPage = false;
  @Input() notFixedHeight = false;
  @Input() maxHeight = false;
  @Input() containsVideo = false;
  @Input() addMarginToDescription = false;
  @Input() centeredTitle = false;
  @Input() ribbon = { text: '', type: '' };
  @Input() isPremium = false;
  @Input() removeLineClamp = false;
  @Input() markAsCompleted = false;
  @Input() inProgress = false;
  @Input() showHamburgerMenu = true;
  @Input() showRateBar = false;
  @Input() rateHeight = false;
  @Input() completed = false;

  @Output() titleClicked = new EventEmitter<string>();
  @Output() editButtonClicked = new EventEmitter<object>();
  @Output() markAsCompletedButtonClicked = new EventEmitter<object>();
  @Output() rateButtonClicked = new EventEmitter();

  loading = false;
  dateItem: string = undefined;
  timeItem: string = undefined;

  URLS = URLS;

  constructor(
      private loadingService: LoadingService,
      private paymentService: PaymentService,
      private router: Router,
      private eventService: EventService,
      private informationService: InformationService,
      private userActivityService: UserActivityService
  ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }

  ngOnInit(): void {
    if ( this.date ) {
      this.dateItem = formatDate( new Date( this.date ), 'MM/dd/yyyy', 'en-US' );
      this.timeItem = formatDate( new Date( this.date ), 'HH:mm', 'en-US' );
    }
  }

  onClick(): void {
    this.titleClicked.emit( this.id );
  }

  createCalendarEvent(): void {
    const tmpDate: any = new Date( this.date );
    const start: DateArray = [
      tmpDate.getUTCFullYear(),
      tmpDate.getUTCMonth() + 1,
      tmpDate.getUTCDate(),
      tmpDate.getUTCHours(),
      tmpDate.getUTCMinutes()
    ];

    const categories: string[] = [ this.category.name ];
    if ( this.subCategory ) categories.push( this.subCategory.name );
    if ( this.leafCategory ) categories.push( this.leafCategory.name );

    const organizer = { name: this.user.username };
    let description = this.description;
    if ( this.user.email ) {
      description += ` <${ this.user.email }>`;
    }

    const event: EventAttributes = {
      start,
      startInputType: 'utc',
      duration: { minutes: this.duration },
      title: this.title,
      description,
      url: this.link,
      location: this.link,
      categories,
      organizer
    };

    createEvent( event, ( error, value ) => {
          if ( error ) {
            console.log( 'Error occurred while creating .ics file: ' + error );
          } else {
            const blob = new Blob( [ value ], { type: 'text/calendar' } );

            const anchor = document.createElement( 'a' );
            anchor.download = this.title + '.ics';
            anchor.href = ( window.webkitURL || window.URL ).createObjectURL( blob );
            anchor.dataset.downloadurl = [ 'text/calendar', anchor.download, anchor.href ].join( ':' );
            anchor.click();
            anchor.remove();
          }
        }
    );
  }

  buy() {
    this.loadingService.setLoading( true );
    this.paymentService.initPayment( environment.payment.stripe, this.id, 1 );
  }

  onBuyNowClick() {
    if ( this.isPublicPage ) {
      this.router.navigate( [ URLS.dashboard.event ], { queryParams: { event_id: this.id } } );
    } else {
      this.buy();
    }
  }

  onAttendClick() {
    if ( this.isPublicPage ) {
      this.router.navigate( [ URLS.dashboard.event ], { queryParams: { event_id: this.id } } );
    } else {
      this.eventService.attend( this.id ).subscribe( () => {
        this.informationService.setInformation( `Attended to ${ this.title }`, 'info' );
      } );
    }
  }

  onDropClick() {
    if ( !this.isPublicPage ) {
      this.eventService.drop( this.id ).subscribe( () => {
        this.informationService.setInformation( `Drop ${ this.title }`, 'info' );
      } );
    }
  }

  onMarkAsCompletedClick() {
    this.eventService.markAsCompleted( this.id ).subscribe( () => {
      this.informationService.setInformation( `Completed ${ this.title }`, 'info' )
      this.markAsCompletedButtonClicked.emit( this.id )
    } )
  }

  onEditClick() {
    if ( this.isEditable ) {
      this.editButtonClicked.emit( this.id );
    }
  }

  onCategoryClick() {
    this.router.navigate( [ URLS.dashboard.learn ],
      {
        queryParams: {
          category: this.category.id,
          'sub-category': this.subCategory?.id,
          'leaf-category': this.leafCategory?.id
        }
      } );
  }

  onRateClick() {
    this.userActivityService.rate( this.id, this.selectedRate ).subscribe( () => {
      this.informationService.setInformation( `Rated ${ this.title }`, 'info' )
      this.rateButtonClicked.emit();
    });
  }

  shareVia( brand: string ) {
    let eventUrl: string

    switch ( brand ) {
      case 'twitter':
        const related = this.category.name + ( this.subCategory ? ',' + this.subCategory.name : '' ) +
            ( this.leafCategory ? ',' + this.leafCategory.name : '' )
        console.log( environment.clientUrl )
        eventUrl = environment.social.twitter.shareUrl + environment.clientUrl
          + URLS.dashboard.event + '?event_id=' + this.id + '&text=' + this.title + '&via=wecontribute_io'
          + '&related=' + related
        break
      case 'linkedin':
        eventUrl = environment.social.linkedin.shareUrl + encodeURIComponent(  environment.clientUrl + URLS.dashboard.event
          + '?event_id=' + this.id )
    }

    window.open( eventUrl, '_blank' );
  }

  onStarClick( rate: number ) {
    this.selectedRate = rate;
  }
}
