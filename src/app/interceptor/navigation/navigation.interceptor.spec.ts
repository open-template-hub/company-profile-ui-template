import { TestBed } from '@angular/core/testing';

import { NavigationInterceptor } from './navigation.interceptor';

describe( 'RequestInterceptor', () => {
  beforeEach( () =>
      TestBed.configureTestingModule( {
        providers: [ NavigationInterceptor ],
      } )
  );

  it( 'should be created', () => {
    const interceptor: NavigationInterceptor = TestBed.inject(
        NavigationInterceptor
    );
    expect( interceptor ).toBeTruthy();
  } );
} );
