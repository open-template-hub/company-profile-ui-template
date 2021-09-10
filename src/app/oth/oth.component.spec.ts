import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OthComponent } from './oth.component';

describe( 'OthComponent', () => {
  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      imports: [
        RouterTestingModule
      ],
      declarations: [
        OthComponent
      ],
    } ).compileComponents();
  } ) );

  it( 'should create the app', () => {
    const fixture = TestBed.createComponent( OthComponent );
    const app = fixture.debugElement.componentInstance;
    expect( app ).toBeTruthy();
  } );

  it( `should have as title 'company-profile-ui-template'`, () => {
    const fixture = TestBed.createComponent( OthComponent );
    const app = fixture.debugElement.componentInstance;
    expect( app.title ).toEqual( 'company-profile-ui-template' );
  } );

  it( 'should render title', () => {
    const fixture = TestBed.createComponent( OthComponent );
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect( compiled.querySelector( '.content span' ).textContent ).toContain( 'company-profile-ui-template app is running!' );
  } );
} );
