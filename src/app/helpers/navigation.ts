import { v4 as uuidv4 } from 'uuid';

export interface IdName {
    id: string,
    name: string;
}

export const NAVIGATION = [
    { id: 'top', name: 'Top Games' },
    { id: 'new', name: 'New Games' },
    { id: 'slots', name: 'Slots' },
    { id: 'jackpot', name: 'Jackpots' },
    { id: 'live', name: 'Live' },
    { id: 'blackjack', name: 'Blackjack' },
    { id: 'roulette', name: 'Roulette' },
    { id: 'table', name: 'Table' },
    { id: 'poker', name: 'Poker' },
    { id: 'other', name: 'Other' }
]