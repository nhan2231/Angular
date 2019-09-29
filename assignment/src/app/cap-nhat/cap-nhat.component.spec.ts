import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapNhatComponent } from './cap-nhat.component';

describe('CapNhatComponent', () => {
  let component: CapNhatComponent;
  let fixture: ComponentFixture<CapNhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapNhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapNhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
