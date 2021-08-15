import { TestBed } from '@angular/core/testing';

import { FolloweeService } from './followee.service';

describe( 'FolloweeService', () => {
  let service: FolloweeService;

  beforeEach( () => {
    TestBed.configureTestingModule( {} );
    service = TestBed.inject( FolloweeService );
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );
} );
