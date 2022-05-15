import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestKeysComponent } from './best-keys.component';

describe('BestKeysComponent', () => {
  let component: BestKeysComponent;
  let fixture: ComponentFixture<BestKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestKeysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
