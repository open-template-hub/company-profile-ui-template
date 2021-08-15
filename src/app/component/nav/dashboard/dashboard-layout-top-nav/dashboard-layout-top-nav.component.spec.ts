import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLayoutTopNavComponent } from './dashboard-layout-top-nav.component';

describe( 'DashboardLayoutTopNavComponent', () => {
  let component: DashboardLayoutTopNavComponent;
  let fixture: ComponentFixture<DashboardLayoutTopNavComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ DashboardLayoutTopNavComponent ]
    } )
    .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( DashboardLayoutTopNavComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
