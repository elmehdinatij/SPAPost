import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPostComponent } from './gestion-post.component';

describe('GestionPostComponent', () => {
  let component: GestionPostComponent;
  let fixture: ComponentFixture<GestionPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
