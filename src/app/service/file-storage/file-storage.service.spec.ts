import { TestBed } from '@angular/core/testing';

import { FileStorageService } from './file-storage.service';

describe( 'FileStorageService', () => {
  let service: FileStorageService;

  beforeEach( () => {
    TestBed.configureTestingModule( {} );
    service = TestBed.inject( FileStorageService );
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );
} );
