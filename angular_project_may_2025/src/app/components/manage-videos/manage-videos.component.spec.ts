import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVideosComponent } from './manage-videos.component';

describe('ManageVideosComponent', () => {
  let component: ManageVideosComponent;
  let fixture: ComponentFixture<ManageVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
