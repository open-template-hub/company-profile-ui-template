import { TestBed } from '@angular/core/testing';

import { InformationService } from './information.service';

describe( 'InformationService', () => {
  let service: InformationService;

  beforeEach( () => {
    TestBed.configureTestingModule( {} );
    service = TestBed.inject( InformationService );
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );
} );
