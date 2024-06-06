import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusContaComponent } from './status-conta.component';

describe('StatusContaComponent', () => {
  let component: StatusContaComponent;
  let fixture: ComponentFixture<StatusContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
