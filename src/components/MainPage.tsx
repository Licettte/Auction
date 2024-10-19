import React from 'react';
import {Lot} from "./Lot";
import {Item} from "./item/Item";
import {ItemList} from "./item/ItemList";

export const MainPage = () => {
    return (
        <div>
            Hello
            <Lot/>
            <ItemList/>
        </div>
    );
};

