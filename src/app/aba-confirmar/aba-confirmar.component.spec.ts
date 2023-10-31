import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaConfirmarComponent } from './aba-confirmar.component';

describe('AbaConfirmarComponent', () => {
  let component: AbaConfirmarComponent;
  let fixture: ComponentFixture<AbaConfirmarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbaConfirmarComponent]
    });
    fixture = TestBed.createComponent(AbaConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
