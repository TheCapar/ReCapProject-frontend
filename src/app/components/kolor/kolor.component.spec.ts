import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolorComponent } from './kolor.component';

describe('KolorComponent', () => {
  let component: KolorComponent;
  let fixture: ComponentFixture<KolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
