import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelWithIconDataComponent } from './label-with-icon-data.component';

describe( 'LabelWithIconDataComponent', () => {
  let component: LabelWithIconDataComponent;
  let fixture: ComponentFixture<LabelWithIconDataComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ LabelWithIconDataComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( LabelWithIconDataComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
