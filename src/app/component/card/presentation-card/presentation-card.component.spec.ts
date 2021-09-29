import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationCardComponent } from './presentation-card.component';

describe( 'PresentationCardComponent', () => {
  let component: PresentationCardComponent;
  let fixture: ComponentFixture<PresentationCardComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ PresentationCardComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( PresentationCardComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
