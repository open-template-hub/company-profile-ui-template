import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedCodeEditorComponent } from './animated-code-editor.component';

describe( 'AnimatedCodeEditorComponent', () => {
  let component: AnimatedCodeEditorComponent;
  let fixture: ComponentFixture<AnimatedCodeEditorComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ AnimatedCodeEditorComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( AnimatedCodeEditorComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
