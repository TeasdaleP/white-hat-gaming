import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { IdName } from "src/app/helpers/navigation";
import { ErrorComponent } from "./error.component";

import { v4 as uuidv4 } from 'uuid';

describe('Error Component', () => {
    let component: ErrorComponent;
    let fixture: ComponentFixture<ErrorComponent>;

    let routerSpy = {navigate: jasmine.createSpy('navigate')};

    let mockNavigation: IdName[] =  [
        { id: uuidv4(), name: 'Option A' }
    ]

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorComponent],
            providers: [
                { provide: Router, useValue: routerSpy }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should navigate to home page', () => {
        component.handleCategorySelection(mockNavigation[0]);
        expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
    });
});