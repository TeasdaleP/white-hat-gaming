import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { GamesService } from "src/app/services/games.service";

import * as GamesActions from './games.actions';

@Injectable()
export class GamesEffects {
    
    constructor(private actions$: Actions, private gamesService: GamesService) { }

    getGames$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GamesActions.getGames),
            switchMap(() => {
                return this.gamesService.getGames$().pipe(
                    map((response) => {
                        return GamesActions.getGamesSuccess({ payload: response });
                    }),
                    catchError((error) => {
                        return of(GamesActions.getGamesFailure(error))
                    })
                )
            })
        )
    );
}

