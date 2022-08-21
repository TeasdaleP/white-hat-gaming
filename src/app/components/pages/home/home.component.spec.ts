import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { provideMockActions } from '@ngrx/effects/testing';
import { HomeComponent } from "./home.component";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { Game } from "src/app/ngrx/games";

import { v4 as uuidv4 } from 'uuid';
import { IdName } from "src/app/helpers/navigation";

describe('Home Component', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let actions$ = new Observable<Action>();
    let store: MockStore;

    let mockGame: Game = {
        categories: ['new', 'slots'],
        name: 'Best Game',
        image: 'http://image.com',
        id: uuidv4()
    }

    let mockCategory: IdName = {
        id: uuidv4(),
        name: 'slots'
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            providers: [
                provideMockStore({}),
                provideMockActions(() => actions$)
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        store = TestBed.inject(MockStore);
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should handle game selection', () => {
        spyOn(store, 'dispatch');
        component.handleGameSelection(mockGame);
        expect(store.dispatch).toHaveBeenCalled();
    });

    it('Should handle un-matched category', () => {
        component.category = mockCategory
        const match = component.matchedCategory(mockGame)
        expect(match).toBeFalsy();
    });

    it('Should handle cateogry selection', () => {
        spyOn(store, 'dispatch');
        component.handleCategorySelection(mockCategory);
        expect(store.dispatch).toHaveBeenCalled();
    });

    it('Should be able to match other category', () => {
        const matchedGame: Game = {
            categories: ['new', 'ball'],
            name: 'Best Game',
            image: 'http://image.com',
            id: uuidv4()
        }
        component.category = {
            id: 'other',
            name: 'other'
        }
        const match = component.matchedOther(matchedGame);
        expect(match).toBeTruthy();
    })
});