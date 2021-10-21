import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPartnerSwiperComponent } from './business-partner-swiper.component';

describe( 'BusinessPartnerSwiperComponent', () => {
  let component: BusinessPartnerSwiperComponent;
  let fixture: ComponentFixture<BusinessPartnerSwiperComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ BusinessPartnerSwiperComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( BusinessPartnerSwiperComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
