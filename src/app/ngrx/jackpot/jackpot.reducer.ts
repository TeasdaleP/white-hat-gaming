import { createReducer, on } from "@ngrx/store";
import { Jackpot } from "./jackpot.model";

import * as JackpotActions from './jackpot.actions';

export interface JackpotState {
    data: Array<Jackpot>;
    total: number;
}

export const initialState: JackpotState = {
    data: [],
    total: 0
};

export const jackpotReducer = createReducer(
    initialState,
    on(JackpotActions.getJackpotSuccess, (state, { payload }) => ({ data: payload, total: payload.length })),
);