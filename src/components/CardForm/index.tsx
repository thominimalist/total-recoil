import React, {useState} from "react";

import Select from "../atoms/Select";
import {cardsNumberOptions, colorsOptions} from "./data.form";
import {Card, Color} from "../../models/Card";

const CardForm = () => {
    const [card, setCard] = useState<Card>({value: 1, color: 'hearts'});

    const addCard = () => {

    }

    const setValue = (value: string) => {
        setCard(prevCard => {
            return {...prevCard, value: Number(value)}
        });
    }

    const setColor = (color: string) => {
        setCard(prevCard => {
            return {...prevCard, color: color as Color}
        });
    }

    return (<div className="fixed bg-white bottom-0 w-full flex p-4 content-center space-x-8 rounded-t-lg">
        <span className="my-auto">Ajouter une carte :</span>

        <Select value={`${card.value}`} setValue={setValue} options={cardsNumberOptions}/>

        <Select value={card.color} setValue={setColor} options={colorsOptions}/>

        <button className="bg-sky-300 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-lg" type="submit"
                onClick={addCard}>Ajouter au deck
        </button>
    </div>)
}

export default CardForm;