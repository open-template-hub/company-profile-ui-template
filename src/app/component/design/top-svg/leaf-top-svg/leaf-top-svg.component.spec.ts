import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafTopSvgComponent } from './leaf-top-svg.component';

describe( 'LeafTopSvgComponent', () => {
  let component: LeafTopSvgComponent;
  let fixture: ComponentFixture<LeafTopSvgComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ LeafTopSvgComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( LeafTopSvgComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
