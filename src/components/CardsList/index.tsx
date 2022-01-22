import React from "react";

import Card from "../Card";
import {filteredDeckState} from "../../state/CardState";
import {useRecoilValue} from "recoil";

const CardsList = () => {
    const deck = useRecoilValue(filteredDeckState);

    if (deck.length > 0) {
        return (<div className="w-[960px] mx-auto mt-10 overflow-scroll pb-32 pt-24">
            <div className="grid grid-cols-4 gap-4-px gap-y-8 auto-rows-max auto-cols-min">
                {deck.map((card, index) => <Card {...card} key={index} />)}
            </div>
        </div>)
    }
    return <div className="grid place-items-center h-screen text-3xl font-bold">Aucune carte dans votre deck.</div>
}

export default CardsList;