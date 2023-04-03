import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRPageComponent } from './qrpage.component';

describe('QRPageComponent', () => {
  let component: QRPageComponent;
  let fixture: ComponentFixture<QRPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QRPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QRPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
