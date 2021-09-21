import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThemePageComponent } from './edit-theme-page.component';

describe( 'EditThemePageComponent', () => {
  let component: EditThemePageComponent;
  let fixture: ComponentFixture<EditThemePageComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ EditThemePageComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( EditThemePageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
