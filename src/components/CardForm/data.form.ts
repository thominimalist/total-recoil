import {SelectOption} from "../../models/Select";

export const cardsNumberOptions: SelectOption[] = [ ...Array(10) ].map((element, index): SelectOption => {
    return {
        value: `${index+1}`,
        label: `${index+1}`
    }
})
export const colorsOptions: SelectOption[] = [
    {
        value: 'hearts',
        label: 'Coeur'
    },
    {
        value: 'diamonds',
        label: 'Carreau'
    },
    {
        value: 'spades',
        label: 'Pique'
    },
    {
        value: 'clubs',
        label: 'Trèfle'
    }
]
