import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtLinkComponent } from './ext-link.component';

describe( 'ExtLinkComponent', () => {
  let component: ExtLinkComponent;
  let fixture: ComponentFixture<ExtLinkComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ ExtLinkComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( ExtLinkComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
