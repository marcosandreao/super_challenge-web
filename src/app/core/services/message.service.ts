import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({ providedIn: 'root' })
export class MessageService {

    constructor(private snackBar: MatSnackBar) { }

    show(message: string, duration = 3000) {
        this.snackBar.open(message, undefined, {
            duration: duration,
        });
    }
}