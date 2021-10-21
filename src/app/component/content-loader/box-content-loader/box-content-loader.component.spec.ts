import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContentLoaderComponent } from './box-content-loader.component';

describe( 'BoxContentLoaderComponent', () => {
  let component: BoxContentLoaderComponent;
  let fixture: ComponentFixture<BoxContentLoaderComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ BoxContentLoaderComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( BoxContentLoaderComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
