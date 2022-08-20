import { v4 as uuidv4 } from 'uuid';

export interface IdName {
    id: string,
    name: string;
}

export const NAVIGATION = [
    { id: uuidv4(), name: 'Top Games' },
    { id: uuidv4(), name: 'New Games' },
    { id: uuidv4(), name: 'Slots' },
    { id: uuidv4(), name: 'Jackpots' },
    { id: uuidv4(), name: 'Live' },
    { id: uuidv4(), name: 'Blackjack' },
    { id: uuidv4(), name: 'Roulette' },
    { id: uuidv4(), name: 'Table' },
    { id: uuidv4(), name: 'Poker' },
    { id: uuidv4(), name: 'Other' }
]