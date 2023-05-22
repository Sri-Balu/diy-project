import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterhomeComponent } from './masterhome.component';

describe('MasterhomeComponent', () => {
  let component: MasterhomeComponent;
  let fixture: ComponentFixture<MasterhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterhomeComponent]
    });
    fixture = TestBed.createComponent(MasterhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
