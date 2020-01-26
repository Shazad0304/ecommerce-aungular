import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TackingComponent } from './tacking.component';

describe('TackingComponent', () => {
  let component: TackingComponent;
  let fixture: ComponentFixture<TackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
