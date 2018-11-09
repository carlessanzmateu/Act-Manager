import { Component, OnInit } from '@angular/core';
import { RehearsalsService } from '../../services/rehearsals/rehearsals.service';
import { Rehearsal } from '../../../models/rehearsal.model';
@Component({
  selector: 'app-rehearsals',
  templateUrl: 'rehearsals.page.html',
  styleUrls: ['rehearsals.page.scss']
})
export class RehearsalsPage implements OnInit {
  
  public items: Array<Rehearsal> = [];

  constructor(public rehearsalsService: RehearsalsService) { }

  ngOnInit() {
    this.items = this.rehearsalsService.getRehearsals();
  }
}
