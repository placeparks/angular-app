import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySellModalComponent } from './buy-sell-modal.component';

describe('BuySellModalComponent', () => {
  let component: BuySellModalComponent;
  let fixture: ComponentFixture<BuySellModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuySellModalComponent]
    });
    fixture = TestBed.createComponent(BuySellModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
