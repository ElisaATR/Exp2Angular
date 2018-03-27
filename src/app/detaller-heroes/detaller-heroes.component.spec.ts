import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallerHeroesComponent } from './detaller-heroes.component';

describe('DetallerHeroesComponent', () => {
  let component: DetallerHeroesComponent;
  let fixture: ComponentFixture<DetallerHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallerHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallerHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
