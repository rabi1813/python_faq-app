import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { CanDeactivateGuard } from 'src/app/_guards/can-deactivate/can-deactivate.guard';
import { HomePageComponent } from './home-page.component';
import { ClarityModule } from '@clr/angular';
import { AgGridModule } from 'ag-grid-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectFilterModule} from 'mat-select-filter';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NotificationService } from 'src/app/services/notification.service';



const routes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Home',
            title: 'Home page'
        },
        canActivate: [AuthGuard],
        component: HomePageComponent
    },
    {
        path: 'home-page',
        data: {
            breadcrumb: 'Home',
            title: 'Home page'
        },
        canActivate: [AuthGuard],
        component: HomePageComponent
    }
];

@NgModule({
    declarations: [HomePageComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgxSpinnerModule,
        ClarityModule,
        NgxSpinnerModule,
        AgGridModule.withComponents([]),
        NgSelectModule,
        NgMultiSelectDropDownModule.forRoot(),
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatDialogModule,
        OverlayModule,
        MatDatepickerModule,
        MatSelectModule,
        MatSelectFilterModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule
    ],
    exports: [HomePageComponent],
    providers: [NotificationService, OverlayModule]
})

export class HomePageModule {}
