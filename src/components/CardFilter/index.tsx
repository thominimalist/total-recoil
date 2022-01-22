import Select from "../atoms/Select";
import {filtersOptions} from "./data.filter";
import React from "react";
import {CardFilter} from "../../models/Card";

import {useRecoilState, useResetRecoilState} from "recoil";
import {deckState, selectedFilterState} from "../../state/CardState";


const CardFilterComponent = () => {
    const [selectedFilter, setSelectedFilter] = useRecoilState(selectedFilterState);

    const updateSelectedFilter = (value: string) => {
        setSelectedFilter(value as CardFilter);
    }

    const resetDeck = useResetRecoilState(deckState);

    return <div className="fixed bg-white w-full flex p-4 content-center space-x-8 rounded-b-lg top-0">
        <span className="my-auto">Afficher : </span>
        <Select options={filtersOptions} value={selectedFilter} setValue={updateSelectedFilter}/>

        <button className="bg-sky-300 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-lg" type="submit"
                onClick={resetDeck}>Réinitialiser le deck
        </button>
    </div>
}

export default CardFilterComponent;