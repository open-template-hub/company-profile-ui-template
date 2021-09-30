import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPresentationComponent } from './product-presentation.component';

describe( 'ProductPresentationComponent', () => {
  let component: ProductPresentationComponent;
  let fixture: ComponentFixture<ProductPresentationComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ ProductPresentationComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( ProductPresentationComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
