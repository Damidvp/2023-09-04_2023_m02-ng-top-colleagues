import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanniereComponent } from './banniere.component';

describe('BanniereComponent', () => {
  let component: BanniereComponent;
  let fixture: ComponentFixture<BanniereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanniereComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanniereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('le titre devrait être "Super Titre"', () => {
    const banEl:HTMLElement = fixture.nativeElement;
    const h1 = banEl.querySelector("h1");
    expect(h1?.textContent).toEqual("Super titre");
  })

  it('le titre est piloté par la propriété titre du composant', () => {
    component.titre = "Super titre 2";
    fixture.detectChanges();
    const banEl: HTMLElement = fixture.nativeElement;
    const h1 = banEl.querySelector("h1");
    expect(h1?.textContent).toEqual("Super titre 2");
  });
});
