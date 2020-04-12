import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictockerComponent } from './pictocker.component';

describe('PictockerComponent', () => {
  let component: PictockerComponent;
  let fixture: ComponentFixture<PictockerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictockerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
