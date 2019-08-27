import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafRakeComponent } from './leaf-rake.component';

describe('LeafRakeComponent', () => {
  let component: LeafRakeComponent;
  let fixture: ComponentFixture<LeafRakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafRakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafRakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
