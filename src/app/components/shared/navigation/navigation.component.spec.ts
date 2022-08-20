import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NavigationComponent } from "./navigation.component";

import { v4 as uuidv4 } from 'uuid';
import { IdName } from "src/app/helpers/navigation";

describe('Navigation Component', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;

    let mockNavigation: IdName[] =  [
        { id: uuidv4(), name: 'Option A' },
        { id: uuidv4(), name: 'Option B' },
        { id: uuidv4(), name: 'Option C' }
    ]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavigationComponent],
            providers: [

            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should have defined inputs', () => {
        expect(component.navigation).toBeUndefined();
        expect(component.selected).toBeUndefined();

        component.navigation = mockNavigation;
        component.selected = mockNavigation[1]

        expect(component.navigation).toBeDefined();
        expect(component.selected).toBeDefined();
    });

    it('Should be able to emit selected values', () => {
        spyOn(component.selection, 'emit');
        component.handleSelection(mockNavigation[0]);
        expect(component.selection.emit).toHaveBeenCalled();
        expect(component.selection.emit).toHaveBeenCalledWith(mockNavigation[0]);
    })
});