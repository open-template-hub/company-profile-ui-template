import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProfilePageComponent } from './public-profile-page.component';

describe( 'PublicProfilePageComponent', () => {
  let component: PublicProfilePageComponent;
  let fixture: ComponentFixture<PublicProfilePageComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ PublicProfilePageComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( PublicProfilePageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
