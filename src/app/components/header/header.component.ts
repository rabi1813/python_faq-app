import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() logoutEvent = new EventEmitter<any>();
    logoutData = []; 
    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {}
    
    logout() {
        
    }
    
    myFucntion(): void {
        document.getElementById("myDropdon").classList.toggle("show");
        window.onclick = function(e) {
            if (!e.targe.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for(var d=0;d<dropdowns.length;d++) {
                    var openDropdown = dropdowns[d];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show')
                    }
                }
            }
        }
    }
}
