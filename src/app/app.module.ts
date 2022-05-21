import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { CanDeactivateGuard } from './_guards/can-deactivate/can-deactivate.guard';
import { BreadcrumbModule } from 'angular-crumbs';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogComponent, DialogService } from './services/dialog.service';

@NgModule({
    declarations: [
        AppComponent,
        SideNavigationComponent,
        HeaderComponent,
        DialogComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        ClarityModule,
        HttpClientModule,
        AppRoutingModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        AgGridModule.withComponents([]),
        FormsModule,
        NgSelectModule,
        NgMultiSelectDropDownModule.forRoot(),
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        BreadcrumbModule,
        MatTableModule,
        MatSliderModule,
        MatSortModule,
        MatMenuModule,
        MatIconModule,
        DragDropModule
    ],
    providers: [CanDeactivateGuard, DialogService,
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
