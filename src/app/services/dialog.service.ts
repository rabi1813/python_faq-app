import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit, ApplicationRef, ChangeDetectorRef } from '@angular/core';

@Component({
    template: `
    <div class="modal-header">
        <h4 class="modal-title">{{ title }}</h4>
    </div>
    <div class="modal-body">
        <p [innerHTML]="message"></p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="close()">{{ confirmText }}</button>
    </div>`
})

export class DialogComponent implements OnInit {
    @Input() title;
    @Input() message;
    @Input() confirmText: string = "Ok";

    constructor(
        public activeModal: NgbActiveModal,
        public changeRef: ChangeDetectorRef,
        private dialogService: DialogService
    ) {}
    
    ngOnInit(): void {
        
    }

    public close() {
        this.dialogService.close();
    }
}

@Injectable({
    providedIn: 'root'
  })
export class DialogService {
    
    constructor(private modalService: NgbModal) { }
    
    public open(options: NgbModalOptions = { backdrop: 'static', size: 'lg'}) {
        const modalRef = this.modalService.open(DialogComponent, options);

        let instance = (modalRef as any)._windowCmptRef.instance
        setTimeout(() => {
            instance.windowClass = 'custon-show';
        }, 0)

        let fx = (modalRef as any)._removeModalElements.bind(modalRef);
        (modalRef as any)._removeModalElements = () => {
            instance.windowClass = "";
            setTimeout(fx, 250);
        }

        modalRef.componentInstance.title = "Session Expiring!"
        modalRef.componentInstance.message = "You will be logged out of the system in a few minutes. To avoid any data loss, please log out and log back into the application.";
        modalRef.componentInstance.confirmText = "OK";
        modalRef.componentInstance.changeRef.markForCheck();
        return modalRef.result;
    }

    public close() {
        this.modalService.dismissAll();
    }
}
