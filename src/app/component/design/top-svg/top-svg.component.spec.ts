import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSvgComponent } from './top-svg.component';

describe( 'TopSvgComponent', () => {
  let component: TopSvgComponent;
  let fixture: ComponentFixture<TopSvgComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ TopSvgComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( TopSvgComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
