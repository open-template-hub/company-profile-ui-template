import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPageComponent } from './sign-up-page.component';

describe( 'SignUpPageComponent', () => {
  let component: SignUpPageComponent;
  let fixture: ComponentFixture<SignUpPageComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ SignUpPageComponent ]
    } )
    .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( SignUpPageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
