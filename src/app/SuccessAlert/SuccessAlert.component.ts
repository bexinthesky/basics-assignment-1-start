import { Component } from '@angular/core';

@Component({
    selector: 'app-successalert',
    templateUrl: './SuccessAlert.component.html',
    styleUrls: ['./SuccessAlert.component.css']
})
export class SuccessAlertComponent {
    message: string = "Success";
}