import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilePageComponent } from './edit-profile-page.component';

describe( 'EditProfilePageComponent', () => {
  let component: EditProfilePageComponent;
  let fixture: ComponentFixture<EditProfilePageComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ EditProfilePageComponent ]
    } )
    .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( EditProfilePageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
