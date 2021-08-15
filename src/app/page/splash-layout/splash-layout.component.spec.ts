import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashLayoutComponent } from './splash-layout.component';

describe( 'SplashLayoutComponent', () => {
  let component: SplashLayoutComponent;
  let fixture: ComponentFixture<SplashLayoutComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ SplashLayoutComponent ]
    } )
    .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( SplashLayoutComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
