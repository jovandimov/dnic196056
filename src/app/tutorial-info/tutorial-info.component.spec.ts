import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialInfoComponent } from './tutorial-info.component';

describe('TutorialInfoComponent', () => {
  let component: TutorialInfoComponent;
  let fixture: ComponentFixture<TutorialInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
