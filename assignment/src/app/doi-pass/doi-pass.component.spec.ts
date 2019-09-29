import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoiPassComponent } from './doi-pass.component';

describe('DoiPassComponent', () => {
  let component: DoiPassComponent;
  let fixture: ComponentFixture<DoiPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoiPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoiPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
