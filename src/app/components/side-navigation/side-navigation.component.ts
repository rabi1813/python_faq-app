import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

    constructor(
    private router: Router
    ) { }

    ngOnInit(): void {
    }


    showHome() {
        this.router.navigate(['/home-page']);
    }

}
