import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemapPageComponent } from './sitemap-page.component';

describe( 'SitemapPageComponent', () => {
  let component: SitemapPageComponent;
  let fixture: ComponentFixture<SitemapPageComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ SitemapPageComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( SitemapPageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
