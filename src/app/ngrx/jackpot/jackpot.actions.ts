import { createAction, props } from "@ngrx/store";
import { Jackpot } from "./jackpot.model";

export const getJackpot = createAction('[Jackpot] Get Data');

export const getJackpotSuccess = createAction('[Jackpot] Get Data Success', props<{ payload: Array<Jackpot> }>());

export const getJackpotFailure = createAction('[Jackpot] Get Data Failure', props<{ error: any }>());