import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desafio01Component } from './desafio-01.component';

describe('Desafio01Component', () => {
  let component: Desafio01Component;
  let fixture: ComponentFixture<Desafio01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Desafio01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desafio01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
