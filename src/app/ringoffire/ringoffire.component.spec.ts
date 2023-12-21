import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingoffireComponent } from './ringoffire.component';

describe('RingoffireComponent', () => {
  let component: RingoffireComponent;
  let fixture: ComponentFixture<RingoffireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RingoffireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RingoffireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
