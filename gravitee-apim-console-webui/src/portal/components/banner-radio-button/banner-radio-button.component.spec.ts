import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRadioButtonComponent } from './banner-radio-button.component';

describe('BannerRadioButtonComponent', () => {
  let component: BannerRadioButtonComponent;
  let fixture: ComponentFixture<BannerRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerRadioButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
