import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandButtonComponent } from './brand-button.component';

describe( 'BrandButtonComponent', () => {
  let component: BrandButtonComponent;
  let fixture: ComponentFixture<BrandButtonComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ BrandButtonComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( BrandButtonComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
