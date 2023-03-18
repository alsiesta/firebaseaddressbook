import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewuserinputComponent } from './newuserinput.component';

describe('NewuserinputComponent', () => {
  let component: NewuserinputComponent;
  let fixture: ComponentFixture<NewuserinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewuserinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewuserinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
