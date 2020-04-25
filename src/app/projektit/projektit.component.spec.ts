import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektitComponent } from './projektit.component';

describe('ProjektitComponent', () => {
  let component: ProjektitComponent;
  let fixture: ComponentFixture<ProjektitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjektitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
