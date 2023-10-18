import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremiListComponent } from './sobremi-list.component';

describe('SobremiListComponent', () => {
  let component: SobremiListComponent;
  let fixture: ComponentFixture<SobremiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobremiListComponent]
    });
    fixture = TestBed.createComponent(SobremiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
