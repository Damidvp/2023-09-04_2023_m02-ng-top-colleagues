import { Personne } from './../personne';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilComponent } from './profil.component';
import { By } from "@angular/platform-browser";

describe('ProfilComponent', () => {
  let component: ProfilComponent;
  let fixture: ComponentFixture<ProfilComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ProfilComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("avec une personne ayant un nom et un prénom", () => {
    const p = new Personne("Hugues", "Paul");

    component.personne = p;
    fixture.detectChanges();

    const hostEl:HTMLElement = fixture.nativeElement;
    const phrase = hostEl.querySelector("label");
    expect(phrase?.textContent).toEqual("Hugues - Paul");
  });

  it("un clic sur J'aime émet true", () => {
    let avis = false;
    component.avis.subscribe((av:boolean) => (avis = av));

    const hostDe = fixture.debugElement;
    const btnDe = hostDe.query(By.css("button#aimer"));

    btnDe.triggerEventHandler("click", null);

    expect(avis).toEqual(true);
  })
});
