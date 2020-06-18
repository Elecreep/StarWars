import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaisseauDetailsComponent } from './vaisseau-details.component';

describe('VaisseauDetailsComponent', () => {
  let component: VaisseauDetailsComponent;
  let fixture: ComponentFixture<VaisseauDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaisseauDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaisseauDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
