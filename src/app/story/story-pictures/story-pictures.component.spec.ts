import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPicturesComponent } from './story-pictures.component';

describe('StoryPicturesComponent', () => {
  let component: StoryPicturesComponent;
  let fixture: ComponentFixture<StoryPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
