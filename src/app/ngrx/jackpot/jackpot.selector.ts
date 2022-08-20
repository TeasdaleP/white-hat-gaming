import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Jackpot } from "./jackpot.model";
import { JackpotState } from "./jackpot.reducer";

export const selectFeature = createFeatureSelector<JackpotState>('jackpot');

export const selectJackpot = createSelector(selectFeature, (state: JackpotState): Array<Jackpot> => state.data);

export const selectJackpotTotal = createSelector(selectFeature, (state: JackpotState): number => state.total);