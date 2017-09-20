import { Component } from '@angular/core';

@Component({
    selector: 'app-warningalert',
    templateUrl: './WarningAlert.component.html',
    styleUrls: ['./WarningAlert.component.css']
})
export class WarningAlertComponent {
    message: string = "Warning";
}