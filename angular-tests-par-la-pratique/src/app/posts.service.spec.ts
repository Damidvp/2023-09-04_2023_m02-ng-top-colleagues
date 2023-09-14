import { TestBed, inject } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('PostsService', () => {
  let service: PostsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });
    service = TestBed.inject(PostsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it("recupererTousLesPosts() envoie une requête HTTP vers https://jsonplaceholder.typicode.com/posts", () => {
    service.recupererTousLesPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts[0]["title"]).toBe("Titre 1");
      expect(posts[1]["title"]).toBe("Titre 2");
    });

    const requete = httpTestingController.expectOne("https://jsonplaceholder.typicode.com/posts");

    expect(requete.request.method).toEqual("GET");

    requete.flush([{id: 1, title: "Titre 1"}, {id: 2, title: "Titre 2"}]);
  })

  afterEach(()=> {
    httpTestingController.verify();
  })

});
