import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LintukotoComponent } from './lintukoto.component';

describe('LintukotoComponent', () => {
  let component: LintukotoComponent;
  let fixture: ComponentFixture<LintukotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LintukotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LintukotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
