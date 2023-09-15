import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthService } from '../providers/auth.service';
import { ColleagueService } from '../providers/colleague.service';
import { VoteService } from '../providers/vote.service';

describe('AuthService', () => {
  let service:AuthService;
  let httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  it('getUserLoggedIn() envoie une requête HTTP vers https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/current_user', () => {
    service.getUserLoggedIn().subscribe(user => {
      expect(user["pseudo"].substring(user["pseudo"].length - 2)).toBe("01");
    })
    const requete = httpTestingController.expectOne("https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/current_user");
    expect(requete.request.method).toEqual("GET");
  })

  afterEach(() => {
    httpTestingController.verify();
  })
})

describe('ColleagueService', () => {
  let service:ColleagueService;
  let httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ColleagueService]
    });
    service = TestBed.inject(ColleagueService);
    httpTestingController = TestBed.inject(HttpTestingController);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  it('getCollegueByPseudo() envoie une requête HTTP vers https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues/<pseudo>', () => {
    service.getCollegueByPseudo("gio01").subscribe(user => {
      if(user){
        expect(user["pseudo"]).toBe("gio01");
      } else {
        expect(user).toBeNull();
      }
    })
    const requete = httpTestingController.expectOne("https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues/gio01");
    expect(requete.request.method).toEqual("GET");
  })

  afterEach(() => {
    httpTestingController.verify();
  })

})

describe('VoteService', () => {
  let service:VoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [VoteService]
    });
    service = TestBed.inject(VoteService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  })
})
