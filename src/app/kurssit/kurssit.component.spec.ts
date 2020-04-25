import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurssitComponent } from './kurssit.component';

describe('KurssitComponent', () => {
  let component: KurssitComponent;
  let fixture: ComponentFixture<KurssitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurssitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurssitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
