import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundTopSvgComponent } from './round-top-svg.component';

describe( 'RoundTopSvgComponent', () => {
  let component: RoundTopSvgComponent;
  let fixture: ComponentFixture<RoundTopSvgComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ RoundTopSvgComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( RoundTopSvgComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
