import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleLibraryComponent } from './scale-library.component';

describe('ScaleLibraryComponent', () => {
  let component: ScaleLibraryComponent;
  let fixture: ComponentFixture<ScaleLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaleLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
