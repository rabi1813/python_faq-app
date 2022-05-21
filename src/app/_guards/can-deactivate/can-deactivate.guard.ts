import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ComponentCanDeactivate } from "./component-can-deactivate";

@Injectable({
    providedIn: 'root'
  })
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {

    constructor() {}
    canDeactivate(component: ComponentCanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> {
        if (!component.canDeactivate()) {
            if (confirm("You have unsaved changes! If you leave, your changes will be lost")) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }
}