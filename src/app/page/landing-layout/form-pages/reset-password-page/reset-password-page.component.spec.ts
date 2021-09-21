import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordPageComponent } from './reset-password-page.component';

describe( 'ResetPasswordPageComponent', () => {
  let component: ResetPasswordPageComponent;
  let fixture: ComponentFixture<ResetPasswordPageComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ ResetPasswordPageComponent ]
    } )
    .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( ResetPasswordPageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
