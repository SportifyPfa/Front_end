import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteTerrainComponent } from './carte-terrain.component';

describe('CarteTerrainComponent', () => {
  let component: CarteTerrainComponent;
  let fixture: ComponentFixture<CarteTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteTerrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
