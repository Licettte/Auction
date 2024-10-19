import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {itemApi} from "./reducers/thing/ItemApi";
import {rememberEnhancer, rememberReducer} from "redux-remember";

const rememberedReducers = [
    itemApi.reducerPath,

];

const rootReducer = combineReducers({
    [itemApi.reducerPath]: itemApi.reducer,

});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
    reducer: rememberedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })

            .concat(itemApi.middleware),

    enhancers: (getDefaultEnhancer) =>
        getDefaultEnhancer().concat(rememberEnhancer(window.localStorage, rememberedReducers)),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
