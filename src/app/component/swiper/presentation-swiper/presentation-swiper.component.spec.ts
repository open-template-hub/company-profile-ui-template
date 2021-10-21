import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationSwiperComponent } from './presentation-swiper.component';

describe( 'PresentationSwiperComponent', () => {
  let component: PresentationSwiperComponent;
  let fixture: ComponentFixture<PresentationSwiperComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ PresentationSwiperComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( PresentationSwiperComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
