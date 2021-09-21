import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card1Component } from './card1.component';

describe( 'CardComponent', () => {
  let component: Card1Component;
  let fixture: ComponentFixture<Card1Component>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ Card1Component ]
    } )
    .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( Card1Component );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
