import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemeComponent } from './changeme.component';

describe('ChangemeComponent', () => {
  let component: ChangemeComponent;
  let fixture: ComponentFixture<ChangemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
