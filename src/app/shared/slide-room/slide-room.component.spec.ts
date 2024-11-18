import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideRoomComponent } from './slide-room.component';

describe('SlideRoomComponent', () => {
  let component: SlideRoomComponent;
  let fixture: ComponentFixture<SlideRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
