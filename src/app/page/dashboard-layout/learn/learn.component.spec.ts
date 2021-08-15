import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnComponent } from './learn.component';

describe( 'LearnComponent', () => {
  let component: LearnComponent;
  let fixture: ComponentFixture<LearnComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ LearnComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( LearnComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
