import React from "react";
import {Card} from "../../models/Card";

const CardComponent = (card: Card) => {
    const borderColor = card.color === 'diamonds' || card.color === 'hearts' ? 'border-red-600' : 'border-black';

    return (
        <div className={`flex flex-col w-[200px] h-[300px] border-solid border-4 ${borderColor} rounded-md bg-white justify-center content-center shadow-md place-self-center`}>
            <div className="flex justify-center space-x-2">
                <span className="text-center text-2xl">{card.value}</span>
                <img src={`/images/${card.color}.svg`} className="w-6" alt={card.color} />
            </div>

        </div>
    )
}

export default CardComponent;