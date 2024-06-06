import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContaComponent } from './table-conta.component';

describe('TableContaComponent', () => {
  let component: TableContaComponent;
  let fixture: ComponentFixture<TableContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
