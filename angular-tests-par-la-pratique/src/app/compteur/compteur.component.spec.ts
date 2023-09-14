import { CompteurService } from './../compteur.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurComponent } from './compteur.component';

describe('CompteurComponent', () => {
  let component: CompteurComponent;
  let fixture: ComponentFixture<CompteurComponent>;

  let compteurServiceStub = {
    incrementer: () => 14
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CompteurComponent],
      providers: [{provide: CompteurService, useValue: compteurServiceStub}]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("à l'initialisation le composant affiche l'incrément inital (ici 14)", () => {
    const compteurEl:HTMLElement = fixture.nativeElement;
    const phrase = compteurEl.querySelector("p");
    expect(phrase?.textContent).toEqual("Le compteur est à 14");
  })
});
