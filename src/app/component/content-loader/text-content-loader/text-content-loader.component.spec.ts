import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextContentLoaderComponent } from './text-content-loader.component';

describe( 'TextContentLoaderComponent', () => {
  let component: TextContentLoaderComponent;
  let fixture: ComponentFixture<TextContentLoaderComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ TextContentLoaderComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( TextContentLoaderComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
