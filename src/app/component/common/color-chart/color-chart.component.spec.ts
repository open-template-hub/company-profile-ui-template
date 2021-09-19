import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChartComponent } from './color-chart.component';

describe( 'ColorChartComponent', () => {
  let component: ColorChartComponent;
  let fixture: ComponentFixture<ColorChartComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ ColorChartComponent ]
    } )
    .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( ColorChartComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
