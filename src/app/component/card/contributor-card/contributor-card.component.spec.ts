import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorCardComponent } from './contributor-card.component';

describe( 'EmployeeCardComponent', () => {
  let component: ContributorCardComponent;
  let fixture: ComponentFixture<ContributorCardComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ ContributorCardComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( ContributorCardComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
