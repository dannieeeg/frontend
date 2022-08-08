import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfailureComponent } from './loginfailure.component';

describe('LoginfailureComponent', () => {
  let component: LoginfailureComponent;
  let fixture: ComponentFixture<LoginfailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginfailureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginfailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
