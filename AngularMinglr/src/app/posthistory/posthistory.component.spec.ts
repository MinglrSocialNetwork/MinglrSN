import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosthistoryComponent } from './posthistory.component';

describe('PosthistoryComponent', () => {
  let component: PosthistoryComponent;
  let fixture: ComponentFixture<PosthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
