import { createReducer, on } from "@ngrx/store";
import { Game } from "./games.model";

import * as GamesActions from './games.actions';

export interface GameState {
    data: Array<Game>;
    total: number;
}

export const initialState: GameState = {
    data: [],
    total: 0
};

export const gamesReducer = createReducer(
    initialState,
    
    on(GamesActions.getGamesSuccess, (state, { payload }) => ({ data: payload, total: payload.length })),
);