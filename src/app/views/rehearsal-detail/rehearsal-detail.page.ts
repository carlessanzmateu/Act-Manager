import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RehearsalsService } from '../../services/rehearsals/rehearsals.service';
import { Rehearsal } from '../../../models/rehearsal.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rehearsal-detail',
  templateUrl: 'rehearsal-detail.page.html',
  styleUrls: ['rehearsal-detail.page.scss']
})
export class RehearsalDetailPage implements OnInit {
  
  public rehearsal: Rehearsal;

  constructor(public rehearsalsService: RehearsalsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.rehearsal = this.rehearsalsService.getRehearsalDetail(this.getRehearsalIdFromUrl());
  }

  getRehearsalIdFromUrl(): Observable<number> {
    // return this.route.params.pipe();
  }
}
