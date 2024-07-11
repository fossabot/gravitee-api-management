import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import {
  MatExpansionModule,
} from '@angular/material/expansion';
import { RouterLink } from '@angular/router';

import { ApiScoreComponent } from "./api-score.component";
import { ApiScoreListComponent } from './api-score-list/api-score-list.component';

import { GioPermissionModule } from '../../../shared/components/gio-permission/gio-permission.module';
import { GioTableWrapperModule } from '../../../shared/components/gio-table-wrapper/gio-table-wrapper.module';
import { MapProviderNamePipe } from '../../integrations/pipes/map-provider-name.pipe';



@NgModule({
  declarations: [
    ApiScoreComponent,
    ApiScoreListComponent
  ],
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    GioPermissionModule,
    MatButton,
    MatCardTitle,
    MatCardSubtitle,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatExpansionModule,
    GioTableWrapperModule,
    MapProviderNamePipe,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatIconButton,
    MatRow,
    MatRowDef,
    MatTable,
    MatTooltip,
    MatNoDataRow,
    MatHeaderCellDef,
    RouterLink
  ],
  exports: [ApiScoreComponent]
})
export class ApiScoreModule { }
