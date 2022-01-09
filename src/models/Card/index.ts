export interface Card {
    value: number;
    color: Color;
}

export type Color = 'spades' | 'hearts' | 'diamonds' | 'clubs' | undefined;

export enum CardFilter {
    ALL = 'ALL',
    SPADES_ONLY = 'SPADES_ONLY',
    HEARTS_ONLY = 'HEARTS_ONLY'
}