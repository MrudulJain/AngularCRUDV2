import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentDBComponent } from './student-db.component';

describe('StudentDBComponent', () => {
  let component: StudentDBComponent;
  let fixture: ComponentFixture<StudentDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
