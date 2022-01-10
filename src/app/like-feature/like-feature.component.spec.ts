import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFeatureComponent } from './like-feature.component';

describe('LikeFeatureComponent', () => {
  let component: LikeFeatureComponent;
  let fixture: ComponentFixture<LikeFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
