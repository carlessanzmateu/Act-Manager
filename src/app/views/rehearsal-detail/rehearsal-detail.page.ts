import { Component, OnInit } from '@angular/core';
import { RehearsalsService } from '../../services/rehearsals/rehearsals.service';
import { Rehearsal } from '../../../models/rehearsal.model';
@Component({
  selector: 'app-rehearsal-detail',
  templateUrl: 'rehearsal-detail.page.html',
  styleUrls: ['rehearsal-detail.page.scss']
})
export class RehearsalDetailPage implements OnInit {
  
  public item: Rehearsal;

  constructor(public rehearsalsService: RehearsalsService) { }

  ngOnInit() {
    this.item = this.rehearsalsService.getRehearsalDetail(0);
  }
}
