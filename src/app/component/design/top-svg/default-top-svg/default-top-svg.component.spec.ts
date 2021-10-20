import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTopSvgComponent } from './default-top-svg.component';

describe( 'DefaultTopSvgComponent', () => {
  let component: DefaultTopSvgComponent;
  let fixture: ComponentFixture<DefaultTopSvgComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ DefaultTopSvgComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( DefaultTopSvgComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
