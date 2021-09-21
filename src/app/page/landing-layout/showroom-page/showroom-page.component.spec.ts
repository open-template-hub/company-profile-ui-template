import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomPageComponent } from './showroom-page.component';

describe( 'ShowroomPageComponent', () => {
  let component: ShowroomPageComponent;
  let fixture: ComponentFixture<ShowroomPageComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ ShowroomPageComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( ShowroomPageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
