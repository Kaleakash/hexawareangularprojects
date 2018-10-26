import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemethodComponent } from './deletemethod.component';

describe('DeletemethodComponent', () => {
  let component: DeletemethodComponent;
  let fixture: ComponentFixture<DeletemethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletemethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
