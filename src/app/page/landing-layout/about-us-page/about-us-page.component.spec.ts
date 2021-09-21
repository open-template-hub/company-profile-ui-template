import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPageComponent } from './about-us-page.component';

describe( 'AboutUsPageComponent', () => {
  let component: AboutUsPageComponent;
  let fixture: ComponentFixture<AboutUsPageComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ AboutUsPageComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( AboutUsPageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
