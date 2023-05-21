import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPpageComponent } from './otppage.component';

describe('OTPpageComponent', () => {
  let component: OTPpageComponent;
  let fixture: ComponentFixture<OTPpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OTPpageComponent]
    });
    fixture = TestBed.createComponent(OTPpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
