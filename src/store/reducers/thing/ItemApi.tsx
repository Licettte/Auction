import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, LibrariesEndpoints, type Response } from '@/api/api.ts';
import { BookPageTypes } from '@/modules/user/library/models/BookPageModel.ts';
import {
    ActionsParams,
    addBookResponse,
    addCoverBookParams,
    addFileBookParams,
    addNewBookParams,
    addNewBookResponse,
    allScores,
    ApproveBookParams,
    Book,
    bookDownloadedByUserParams,
    bookWaitingParams,
    bookWaitingResponse,
    DeclineBookParams,
    DeleteFileBookParams,
    deleteScoreParams,
    FavoriteParams,
    FavoriteResponse,
    ModerationStatus,
    RentalParams,
    RentalResponse,
    RentalResponseEnd,
    HistoryBook,
    scoreParams,
    UpdateBookParams,
} from '@/store/reducers/libraries/types.ts';
import { AvailabilityStatuses } from '@/modules/user/library/models/BookCardModel.ts';

export interface BookFilterParams {
    pageSize: number;
    pageNumber: number;
    moderationStatus?: ModerationStatus;
    availabilityStatuses?: AvailabilityStatuses;
    minRating?: number;
    name?: string;
    genres?: string;
    action?: string;
    bookType?: BookPageTypes;
    languages?: string;
    userId?: number;
    bookName?: string;
}

export const bookFilterApi = createApi({
    reducerPath: 'bookFilterApi',
    baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
    tagTypes: ['Things'],
    endpoints: (builder) => ({

        getBookById: builder.query<Book, number>({
            query: (bookId) => ({
                url: `${LibrariesEndpoints.BOOKS}/${bookId}`,
                method: 'GET',
            }),
            transformResponse: (response: Response<Book>) => response.data,
            providesTags: ['Things'],
        }),
    }),
});

export const {

} = bookFilterApi;
