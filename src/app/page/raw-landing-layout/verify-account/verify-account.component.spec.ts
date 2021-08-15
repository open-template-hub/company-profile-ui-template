import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAccountComponent } from './verify-account.component';

describe( 'VerifyAccountComponent', () => {
  let component: VerifyAccountComponent;
  let fixture: ComponentFixture<VerifyAccountComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ VerifyAccountComponent ]
    } )
    .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( VerifyAccountComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
