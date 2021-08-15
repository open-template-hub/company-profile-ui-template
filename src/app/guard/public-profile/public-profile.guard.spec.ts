import { TestBed } from '@angular/core/testing';

import { PublicProfileGuard } from './public-profile.guard';

describe( 'PublicProfileService', () => {
  let service: PublicProfileGuard;

  beforeEach( () => {
    TestBed.configureTestingModule( {} );
    service = TestBed.inject( PublicProfileGuard );
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );
} );
