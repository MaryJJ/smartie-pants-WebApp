import { smartiePantsAnimations } from './../@shared/animations/index';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Logger, Placement } from '@app/@core';
import { Subject } from 'rxjs';
import { PlacementsDialogComponent } from './placements-dialog/placements-dialog.component';

const log = new Logger('Dashboard');
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: smartiePantsAnimations,
})
export class DashboardComponent implements OnInit {
  placements: Placement[];
  isLoading = false;
  displayedColumns: string[] = ['projectId'];

  constructor(private placementsDialog: MatDialog) {}

  ngOnInit(): void {}

  addPlacement() {
    this.openDialog(true);
  }

  editPlacement() {
    this.openDialog(false);
  }

  private openDialog(create: boolean) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      create,
    };
    const dialogRef = this.placementsDialog.open(
      PlacementsDialogComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.placements = result;
      }
    });
  }
}
