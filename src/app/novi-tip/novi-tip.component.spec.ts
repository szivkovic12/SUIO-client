import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviTipComponent } from './novi-tip.component';

describe('NoviTipComponent', () => {
  let component: NoviTipComponent;
  let fixture: ComponentFixture<NoviTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoviTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoviTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
