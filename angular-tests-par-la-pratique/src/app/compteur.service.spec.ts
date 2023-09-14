import { TestBed } from '@angular/core/testing';

import { CompteurService } from './compteur.service';

describe('CompteurService', () => {
  let service: CompteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('premier appel incrementer() retourne 1', () => {
    const resultat = service.incrementer();
    expect(resultat).toBe(1);
  })

  it('2 appels incrementer() retourne 2', () => {
    service.incrementer();
    const resultat = service.incrementer();
    expect(resultat).toBe(2);
  })
});
