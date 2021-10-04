import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityHistoryCardComponent } from './activity-history-card.component';

describe( 'ActivityHistoryCardComponent', () => {
  let component: ActivityHistoryCardComponent;
  let fixture: ComponentFixture<ActivityHistoryCardComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ ActivityHistoryCardComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( ActivityHistoryCardComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
