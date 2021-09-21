import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiePolicyPageComponent } from './cookie-policy-page.component';

describe( 'CookiePolicyPageComponent', () => {
  let component: CookiePolicyPageComponent;
  let fixture: ComponentFixture<CookiePolicyPageComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ CookiePolicyPageComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( CookiePolicyPageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
