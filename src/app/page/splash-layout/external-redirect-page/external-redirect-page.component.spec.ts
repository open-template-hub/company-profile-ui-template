import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalRedirectPageComponent } from './external-redirect-page.component';

describe( 'ExternalRedirectPageComponent', () => {
  let component: ExternalRedirectPageComponent;
  let fixture: ComponentFixture<ExternalRedirectPageComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ ExternalRedirectPageComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( ExternalRedirectPageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
