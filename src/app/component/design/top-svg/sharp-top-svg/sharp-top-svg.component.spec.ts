import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharpTopSvgComponent } from './sharp-top-svg.component';

describe( 'SharpTopSvgComponent', () => {
  let component: SharpTopSvgComponent;
  let fixture: ComponentFixture<SharpTopSvgComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ SharpTopSvgComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( SharpTopSvgComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
