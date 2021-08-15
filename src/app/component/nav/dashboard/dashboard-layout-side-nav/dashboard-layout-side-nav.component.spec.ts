import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLayoutSideNavComponent } from './dashboard-layout-side-nav.component';

describe( 'DashboardLayoutSideNavComponent', () => {
  let component: DashboardLayoutSideNavComponent;
  let fixture: ComponentFixture<DashboardLayoutSideNavComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ DashboardLayoutSideNavComponent ]
    } )
    .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( DashboardLayoutSideNavComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
