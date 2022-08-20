import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { JackpotService } from "src/app/services/jackpot.service";

import * as JackpotActions from './jackpot.actions';

@Injectable()
export class JackpotEffects {

    constructor(private actions$: Actions, private jackpotService: JackpotService) { }

    getJackpot$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JackpotActions.getJackpot),
            switchMap(() => {
                return this.jackpotService.getJackpots$().pipe(
                    map((response) => {
                        return JackpotActions.getJackpotSuccess({ payload: response });
                    }),
                    catchError((error) => {
                        return of(JackpotActions.getJackpotFailure(error));
                    })
                )
            })
        )
    )
}