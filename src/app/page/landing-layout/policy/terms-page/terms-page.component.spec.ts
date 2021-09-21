import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsPageComponent } from './terms-page.component';

describe( 'TermsPageComponent', () => {
  let component: TermsPageComponent;
  let fixture: ComponentFixture<TermsPageComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ TermsPageComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( TermsPageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
