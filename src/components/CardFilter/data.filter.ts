import {SelectOption} from "../../models/Select";
import {CardFilter} from "../../models/Card";


export const filtersOptions: SelectOption[] = [
    {
        value: CardFilter.ALL.valueOf(),
        label: 'Toutes les cartes'
    },
    {
        value: CardFilter.SPADES_ONLY.valueOf(),
        label: 'Pique seulement'
    },
    {
        value: CardFilter.HEARTS_ONLY.valueOf(),
        label: 'Coeur seulement'
    }
]
