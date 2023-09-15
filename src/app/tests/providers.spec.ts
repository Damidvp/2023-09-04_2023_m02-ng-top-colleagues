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
      expect(user["pseudo"]).toBe("dam01");
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService]
    });
    service = TestBed.inject(ColleagueService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  })
})

describe('VoteService', () => {
  let service:VoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService]
    });
    service = TestBed.inject(VoteService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  })
})
