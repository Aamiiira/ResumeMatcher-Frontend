import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCandidatComponent } from './profil-candidat.component';

describe('ProfilCandidatComponent', () => {
  let component: ProfilCandidatComponent;
  let fixture: ComponentFixture<ProfilCandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
