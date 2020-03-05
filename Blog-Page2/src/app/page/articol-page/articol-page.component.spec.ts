import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticolPageComponent } from './articol-page.component';

describe('ArticolPageComponent', () => {
  let component: ArticolPageComponent;
  let fixture: ComponentFixture<ArticolPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticolPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
