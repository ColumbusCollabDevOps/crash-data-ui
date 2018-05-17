import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashQueryComponent } from './crash-query.component';

describe('CrashQueryComponent', () => {
  let component: CrashQueryComponent;
  let fixture: ComponentFixture<CrashQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrashQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
