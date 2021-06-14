import { smartiePantsAnimations } from './../../@shared/animations/index';
import { Placement } from '@app/@core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placements-table',
  templateUrl: './placements-table.component.html',
  styleUrls: ['./placements-table.component.scss'],
  animations: smartiePantsAnimations,
})
export class PlacementsTableComponent implements OnInit {
  @Input() placements: Placement[];
  @Input() allFields = false;
  displayedColumns: string[];

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.allFields
      ? [
          'id',
          'name',
          'archivedAt',
          'targets',
          'adUnitId',
          'storeName',
          'gameId',
        ]
      : ['id', 'name', 'targets'];
  }
}
