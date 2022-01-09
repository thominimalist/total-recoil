import React from 'react';
import './App.css';

import CardsList from "./components/CardsList";
import CardForm from "./components/CardForm";
import CardFilter from "./components/CardFilter";

function App() {
    return (
        <React.Fragment>
            <CardFilter/>
            <CardsList/>
            <CardForm/>
        </React.Fragment>

    );
}

export default App;
