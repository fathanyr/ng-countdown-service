import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCountdownServiceComponent } from './ng-countdown-service.component';

describe('NgCountdownServiceComponent', () => {
  let component: NgCountdownServiceComponent;
  let fixture: ComponentFixture<NgCountdownServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgCountdownServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgCountdownServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
