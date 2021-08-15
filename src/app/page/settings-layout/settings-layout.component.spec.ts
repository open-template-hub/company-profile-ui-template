import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLayoutComponent } from './settings-layout.component';

describe( 'SettingsLayoutComponent', () => {
  let component: SettingsLayoutComponent;
  let fixture: ComponentFixture<SettingsLayoutComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ SettingsLayoutComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( SettingsLayoutComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
