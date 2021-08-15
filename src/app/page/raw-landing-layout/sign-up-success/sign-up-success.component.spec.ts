import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpSuccessComponent } from './sign-up-success.component';

describe( 'SignUpSuccessComponent', () => {
  let component: SignUpSuccessComponent;
  let fixture: ComponentFixture<SignUpSuccessComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ SignUpSuccessComponent ]
    } )
    .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( SignUpSuccessComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
