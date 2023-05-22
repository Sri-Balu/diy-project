import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgdetailsComponent } from './orgdetails.component';

describe('OrgdetailsComponent', () => {
  let component: OrgdetailsComponent;
  let fixture: ComponentFixture<OrgdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgdetailsComponent]
    });
    fixture = TestBed.createComponent(OrgdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
