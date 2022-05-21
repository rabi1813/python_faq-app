import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter, distinctUntilChanged, map, subscribeOn } from 'rxjs/operators';
import { JwtHelperService} from '@auth0/angular-jwt';
import { DialogService, DialogComponent } from './services/dialog.service';
import { from } from 'rxjs'; 
import { Breadcrumb } from 'angular-crumbs';

export interface breadcrumb {
    label: string;
    url: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    entryComponents: [DialogComponent],
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'python_faq-app';
    public breadcrumbs: Breadcrumb[];
    ID: string;
    applbl = 'Home';
    currentTime;
    warningDisplayed = false;
    basic = true;

    constructor(
        private router: Router, 
        private route: ActivatedRoute,
        private dialogService: DialogService
    ) {}

    ngOnInit(): void {
        let breadcrumb: Breadcrumb = {
            displayName: this.applbl,
            url: "",
            terminal: true,
            route: null
        };

        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
            let root: ActivatedRoute = this.route.root;
            this.breadcrumbs = this.getBreadcrumbs(root);
            this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];
        });

        console.log("Breadcrumbs : " + this.breadcrumbs);

        const curUrl = window.location.href;
    }


    private getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
        const ROUTE_DATA_BREADCRUMB = "title";
        this.ID = this.route.snapshot.queryParamMap.get('ID')

        let children: ActivatedRoute[] = route.children;
        
        if (children.length === 0) {
            return breadcrumbs;
        }

        for (let child of children) {
            if (child.outlet !== PRIMARY_OUTLET || child.snapshot.outlet.length == 0) {
                continue;
            }

            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }

            let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

            url += `/${routeURL}`;
            console.log("URL : " + url)
            this.applbl = child.snapshot.data[ROUTE_DATA_BREADCRUMB]

            let breadcrumb: Breadcrumb = {
                displayName: this.applbl,
                url: url,
                terminal: true,
                route: null
            };
            breadcrumbs.push(breadcrumb);

            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }

}
