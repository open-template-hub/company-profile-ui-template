import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLayoutTopNavComponent } from './landing-layout-top-nav.component';

describe( 'LandingLayoutTopNavComponent', () => {
  let component: LandingLayoutTopNavComponent;
  let fixture: ComponentFixture<LandingLayoutTopNavComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ LandingLayoutTopNavComponent ]
    } )
    .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( LandingLayoutTopNavComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
