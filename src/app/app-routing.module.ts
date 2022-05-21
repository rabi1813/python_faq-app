import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./_guards/auth.guard";
import { HomePageComponent } from "./components/home-page/home-page.component";


const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./components/home-page/home-page.module').then(m=> m.HomePageModule) 
            },
            {
                path: '',
                data: {
                    title: "Home Page"
                },
                loadChildren: () =>
                    import('./components/home-page/home-page.module').then(m=> m.HomePageModule) 
            }            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}