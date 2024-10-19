import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface Item {
    "id": number,
    "name": string,
    "quality": Quality,
    "perStack": number,
    "image": string
}

export enum Quality {
    GREY = 'GREY',
    WHITE = 'WHITE',
    GREEN = 'GREEN',
    BLUE = 'BLUE',
    PURPLE = 'PURPLE',
    ORANGE = 'ORANGE'
}

const baseUrl = `http://176.124.218.238:8080/`;

export const itemApi = createApi({
    reducerPath: 'bookFilterApi',
    baseQuery: fetchBaseQuery({baseUrl, credentials: 'include'}),
    tagTypes: ['Things'],
    endpoints: (builder) => ({

        getAllItems: builder.query<Item[], void>({
            query: () => ({
                url: `item`,
                method: 'GET',
            }),
            transformResponse: (response: Item[]) => response,
            providesTags: ['Things'],
        }),
    }),
});

export const {useGetAllItemsQuery} = itemApi;
