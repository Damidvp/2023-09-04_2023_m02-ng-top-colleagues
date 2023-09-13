import { ActivatedRoute, ParamMap } from '@angular/router';
import { Colleague } from './../../../models/colleague';
import { ColleagueService } from './../../../providers/colleague.service';
import { Component } from '@angular/core';

@Component({
  selector: 'tc-colleague-details',
  templateUrl: './colleague-details.component.html',
  styleUrls: ['./colleague-details.component.scss']
})
export class ColleagueDetailsComponent {

  colleague: Colleague | null = null;
  pseudo: string | null;

  constructor(private colleagueService: ColleagueService, private route: ActivatedRoute) {
    this.pseudo = this.route.snapshot.paramMap.get("pseudo");
    if (this.pseudo) {
      this.colleagueService.getCollegueByPseudo(this.pseudo).subscribe((coll) => {
        console.log(coll);
        this.colleague = coll;
      })
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const pseudo = params.get("pseudo");
    })
  }

}
