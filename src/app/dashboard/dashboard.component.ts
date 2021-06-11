import { smartiePantsAnimations } from './../@shared/animations/index';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Placement } from '@app/@core';
import { Subject } from 'rxjs';
import { PlacementService } from './placement.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: smartiePantsAnimations,
})
export class DashboardComponent implements OnInit {
  placements: Placement[];
  isLoading = false;
  displayedColumns: string[] = ['projectId', 'actions'];
  total = 0;
  pageNumber = 1;
  pageSize = 10;
  resetPage: Subject<boolean> = new Subject<boolean>();
  constructor(
    private placementService: PlacementService,
    private placementDialog: MatDialog,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  addPlacement() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      placement: null,
    };
    dialogConfig.width = '400px';
    // const dialogRef = this.placementDialog.open(PlacementDialogComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.loadData();
    //   }
    // });
  }

  editPlacement(placement: Placement) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      placement,
    };
    dialogConfig.width = '400px';
    // const dialogRef = this.placementDialog.open(PlacementDialogComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     log.info(result);
    //   }
    // });
  }

  pageChange(event: PageEvent) {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  private loadData() {
    this.isLoading = true;
    // this.placementService
    //   .getPlacements({ pageNumber: this.pageNumber, pageSize: this.pageSize })
    //   .pipe(
    //     finalize(() => {
    //       this.isLoading = false;
    //     })
    //   )
    //   .subscribe((response) => {
    //     const pagination = JSON.parse(response.headers.get('X-Pagination'));
    //     this.placements = response.body;
    //     this.total = pagination.totalCount;
    //   });
  }
}
