import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PololocoComponent } from './pololoco.component';

describe('PololocoComponent', () => {
  let component: PololocoComponent;
  let fixture: ComponentFixture<PololocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PololocoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PololocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
