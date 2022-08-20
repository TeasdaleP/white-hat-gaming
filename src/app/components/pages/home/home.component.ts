import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { debounceTime, Observable, ReplaySubject, take, takeUntil } from "rxjs";
import { Actions, ofType } from "@ngrx/effects";
import { Game } from "src/app/ngrx/games/games.model";
import { Jackpot } from "src/app/ngrx/jackpot/jackpot.model";
import { IdName, NAVIGATION } from "src/app/helpers/navigation";

import * as JackpotStore from 'src/app/ngrx/jackpot';
import * as GamesStore from 'src/app/ngrx/games';
import { Router } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    public games$: Observable<Array<Game>>;
    public jackpots$: Observable<Array<Jackpot>>;
    public category$: Observable<IdName | null>;

    public loading: boolean = true;
    public navigation: Array<IdName> = NAVIGATION;
    public selected: IdName = NAVIGATION[5];

    private destroyed$: ReplaySubject<void> = new ReplaySubject();

    constructor(private store: Store, private actions: Actions, private router: Router) {
        this.games$ = this.store.select(GamesStore.selectGames).pipe(takeUntil(this.destroyed$));
        this.jackpots$ = this.store.select(JackpotStore.selectJackpot).pipe(takeUntil(this.destroyed$));
        this.category$ = this.store.select(GamesStore.selectCateogry).pipe(takeUntil(this.destroyed$));
    }

    ngOnInit(): void {
        this.store.dispatch(GamesStore.getGames());

        this.actions.pipe(ofType(GamesStore.getGamesSuccess, JackpotStore.getJackpotSuccess), debounceTime(1000), takeUntil(this.destroyed$)).subscribe(() => {
            this.loading = !this.loading;
        });

        this.actions.pipe(ofType(GamesStore.getGamesFailure, JackpotStore.getJackpotFailure)).subscribe(() => {
            this.router.navigate(['error']);
        });
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    public handleCategorySelection(category: IdName): void {
        this.store.dispatch(GamesStore.updateCateogry({ payload: category }));
    }
}