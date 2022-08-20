import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IdName } from "src/app/helpers/navigation";

import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
    public categories: IdName[] = [{ id: uuidv4(), name: 'Return to Homepage' }]
    
    constructor(private router: Router){}

    ngOnInit(): void {

    }

    public handleCategorySelection(event: IdName): void {
        this.router.navigate(['']);
    }
}