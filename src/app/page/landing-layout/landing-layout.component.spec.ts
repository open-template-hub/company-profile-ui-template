import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLayoutComponent } from './landing-layout.component';

describe( 'LandingLayoutComponent', () => {
  let component: LandingLayoutComponent;
  let fixture: ComponentFixture<LandingLayoutComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ LandingLayoutComponent ]
    } )
    .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( LandingLayoutComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
