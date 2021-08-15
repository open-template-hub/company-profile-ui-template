import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RawLandingLayoutComponent } from './raw-landing-layout.component';

describe( 'RawLandingLayoutComponent', () => {
  let component: RawLandingLayoutComponent;
  let fixture: ComponentFixture<RawLandingLayoutComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ RawLandingLayoutComponent ]
    } )
    .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( RawLandingLayoutComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
