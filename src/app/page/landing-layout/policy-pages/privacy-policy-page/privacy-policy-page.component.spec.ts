import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyPageComponent } from './privacy-policy-page.component';

describe( 'PrivacyPolicyPageComponent', () => {
  let component: PrivacyPolicyPageComponent;
  let fixture: ComponentFixture<PrivacyPolicyPageComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ PrivacyPolicyPageComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( PrivacyPolicyPageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
