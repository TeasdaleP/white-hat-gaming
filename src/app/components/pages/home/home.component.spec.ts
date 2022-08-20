import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { provideMockActions } from '@ngrx/effects/testing';
import { HomeComponent } from "./home.component";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";

describe('Home Component', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let actions$ = new Observable<Action>();
    let store: MockStore;

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
});