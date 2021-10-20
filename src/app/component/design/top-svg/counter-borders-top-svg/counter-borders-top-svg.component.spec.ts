import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterBordersTopSvgComponent } from './counter-borders-top-svg.component';

describe( 'CounterBordersTopSvgComponent', () => {
  let component: CounterBordersTopSvgComponent;
  let fixture: ComponentFixture<CounterBordersTopSvgComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ CounterBordersTopSvgComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( CounterBordersTopSvgComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
