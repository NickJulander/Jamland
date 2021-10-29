import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamlandComponent } from './jamland.component';

describe('JamlandComponent', () => {
  let component: JamlandComponent;
  let fixture: ComponentFixture<JamlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamlandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JamlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
