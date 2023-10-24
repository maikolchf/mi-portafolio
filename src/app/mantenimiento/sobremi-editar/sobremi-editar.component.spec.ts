import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremiEditarComponent } from './sobremi-editar.component';

describe('SobremiEditarComponent', () => {
  let component: SobremiEditarComponent;
  let fixture: ComponentFixture<SobremiEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobremiEditarComponent]
    });
    fixture = TestBed.createComponent(SobremiEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
