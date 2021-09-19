import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDataComponent } from './label-data.component';

describe( 'LabelDataComponent', () => {
  let component: LabelDataComponent;
  let fixture: ComponentFixture<LabelDataComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ LabelDataComponent ]
    } )
    .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( LabelDataComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
