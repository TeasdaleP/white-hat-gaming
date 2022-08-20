import { createReducer, on } from "@ngrx/store";
import { IdName } from "src/app/helpers/navigation";
import { Game } from "./games.model";

import * as GamesActions from './games.actions';

export interface GameState {
    data: Array<Game>;
    category: IdName | null;
    total: number;
}

export const initialState: GameState = {
    data: [],
    category: null,
    total: 0
};

export const gamesReducer = createReducer(
    initialState,
    on(GamesActions.getGamesSuccess, (state, { payload }) => ({ ...state, data: payload, total: payload.length })),
    on(GamesActions.updateCateogry, (state, { payload }) => ({ ...state, category: payload }))
);