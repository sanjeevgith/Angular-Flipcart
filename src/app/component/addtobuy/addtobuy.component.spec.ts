import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtobuyComponent } from './addtobuy.component';

describe('AddtobuyComponent', () => {
  let component: AddtobuyComponent;
  let fixture: ComponentFixture<AddtobuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtobuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtobuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
