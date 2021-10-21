import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageContentLoaderComponent } from './image-content-loader.component';

describe( 'ImageContentLoaderComponent', () => {
  let component: ImageContentLoaderComponent;
  let fixture: ComponentFixture<ImageContentLoaderComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ ImageContentLoaderComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( ImageContentLoaderComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
