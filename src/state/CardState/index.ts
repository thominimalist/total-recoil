import {Card, CardFilter} from "../../models/Card";
import {atom, selector} from "recoil";


export const deckState = atom<Card[]>({
    key: 'deckState',
    default: []
});

export const selectedFilterState = atom<CardFilter>({
    key: 'selectedFilterState',
    default: CardFilter.ALL
});



export const filteredDeckState = selector<Card[]>({
    key: 'filteredDeckState',
    get: opts => {
        const deck = opts.get(deckState);
        const selectedFilter = opts.get(selectedFilterState);

        switch (selectedFilter) {
            case CardFilter.ALL:
                return deck;
            case CardFilter.SPADES_ONLY:
                return deck.filter(card => card.color === 'spades');
            case CardFilter.HEARTS_ONLY:
                return deck.filter(card => card.color === 'hearts');
        }
    }
});