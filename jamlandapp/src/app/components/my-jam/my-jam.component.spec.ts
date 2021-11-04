import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJamComponent } from './my-jam.component';

describe('MyJamComponent', () => {
  let component: MyJamComponent;
  let fixture: ComponentFixture<MyJamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyJamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
