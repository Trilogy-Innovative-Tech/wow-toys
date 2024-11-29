import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconovaComponent } from './econova.component';

describe('EconovaComponent', () => {
  let component: EconovaComponent;
  let fixture: ComponentFixture<EconovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EconovaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
