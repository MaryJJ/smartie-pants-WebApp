import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PlacementDialogComponent } from './placement-dialog/placement-dialog.component';
import { PlacementsDialogComponent } from './placements-dialog/placements-dialog.component';
import { PlacementsTableComponent } from './placements-table/placements-table.component';
import { TargetDialogComponent } from './target-dialog/target-dialog.component';
import { TargetListComponent } from './target-list/target-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PlacementDialogComponent,
    PlacementsDialogComponent,
    PlacementsTableComponent,
    TargetDialogComponent,
    TargetListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
