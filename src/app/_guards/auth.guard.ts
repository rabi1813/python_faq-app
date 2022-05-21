import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router
    ) {}

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        return true;
    }
}