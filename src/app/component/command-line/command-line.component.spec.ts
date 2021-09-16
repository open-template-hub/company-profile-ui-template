import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandLineComponent } from './command-line.component';

describe( 'CommandLineComponent', () => {
  let component: CommandLineComponent;
  let fixture: ComponentFixture<CommandLineComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ CommandLineComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( CommandLineComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
