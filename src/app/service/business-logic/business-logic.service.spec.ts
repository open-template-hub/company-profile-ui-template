import { TestBed } from '@angular/core/testing';

import { BusinessLogicService } from './business-logic.service';

describe( 'BusinessLogicService', () => {
  let service: BusinessLogicService;

  beforeEach( () => {
    TestBed.configureTestingModule( {} );
    service = TestBed.inject( BusinessLogicService );
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );
} );
