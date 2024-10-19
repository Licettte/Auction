import React from 'react';
import './App.css';
import {useGetAllItemsQuery} from "./store/reducers/thing/ItemApi";
import {Item} from "./components/item/Item";

function App() {

    const data = useGetAllItemsQuery()

    console.log(data.data)
    return (
        <div className="App">
      ttttttttttt
        </div>
    );
}

export default App;
