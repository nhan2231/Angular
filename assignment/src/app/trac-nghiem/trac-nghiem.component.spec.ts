import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracNghiemComponent } from './trac-nghiem.component';

describe('TracNghiemComponent', () => {
  let component: TracNghiemComponent;
  let fixture: ComponentFixture<TracNghiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracNghiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracNghiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
