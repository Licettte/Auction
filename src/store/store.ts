import { newPeriodReducer } from './reducers/exchange-ideas/newPeriodSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rememberReducer, rememberEnhancer } from 'redux-remember';
import { logErrorMiddleware } from '@/api/logErrorMiddleware';
import { achievementsApi } from '@/store/reducers/achievementsSlice';
import { adminAchievementReducer } from '@/store/reducers/admin/achievements/adminAchievementSlice';
import { issueAchieveReducer } from '@/store/reducers/admin/achievements/issueAchieveSlice';
import { newEventReducer } from '@/store/reducers/events/newEventSlice';
import { activityHistoryFilterReducer } from '@/store/reducers/filters/activityHistoryFilterSlice';
import { feedFiltersReducer } from '@/store/reducers/filters/feedFilterSlice';
import { projectsFiltersReducer } from '@/store/reducers/filters/projectsFiltersSlice';
import { globalEditReducer } from '@/store/reducers/globalEditSlice';
import { mediaControlReducer } from '@/store/reducers/mediaControlSlice';
import { notificationsApi, notificationsReducer } from '@/store/reducers/notificationsSlice';
import { postApi } from '@/store/reducers/posts/postApi';
import { postsReducer } from '@/store/reducers/posts/postsSlice';
import { projectFetchApi, projectReducer } from '@/store/reducers/projectSlice';
import { routerReducer } from '@/store/reducers/routerSlice';
import { shopProductsApi, shopReducer } from '@/store/reducers/shopSlice';
import { systemEventsApi, systemEventsReducer } from '@/store/reducers/systemEventsSlice';
import { userAuthApi, userFetchApi, userReducer } from '@/store/reducers/userSlice';
import { activityHistoryApi, activityHistoryReducer } from './reducers/activityHistorySlice';
import { adminAchievementsApi } from './reducers/admin/achievements/adminAchievementsApi';
import { adminFetchApi } from './reducers/admin/adminApi';
import { adminReducer } from './reducers/admin/adminSlice';
import { articlesApi } from './reducers/articles/articlesApi';
import { articlesReducer } from './reducers/articles/articlesSlice';
import { eventChatApi } from './reducers/events/eventChat/eventChatApi';
import { eventChatReducer } from './reducers/events/eventChat/eventChatSlice';
import { eventPageReducer } from './reducers/events/eventPageSlice';
import { eventsApi } from './reducers/events/eventsApi';
import { eventsReducer } from './reducers/events/eventsSlice';
import { resultsApi } from './reducers/events/results/resultsApi';
import { resultsReducer } from './reducers/events/results/resultsSlice';
import { articlesFiltersReducer } from './reducers/filters/articlesFiltersSlice';
import { eventsFiltersReducer } from './reducers/filters/eventsFiltersSlice';
import { technologyAdminFiltersReducer } from './reducers/filters/technologyAdminFiltersSlice';
import { usersFiltersReducer } from './reducers/filters/usersFiltersSlice';
import { gratitudeApi, gratitudeReducer } from './reducers/gratitudeSlice';
import { settingsApi, settingsReducer } from './reducers/settingsSlice';
import { supportApi, supportingReducer } from './reducers/supportingSlice';
import { newExchangeIdeaReducer } from './reducers/exchange-ideas/newExchangeIdeaSlice';
import { exchangeIdeasFiltersReducer } from './reducers/filters/exchangeIdeasFiltersSlice';
import { exchangeIdeasReducer } from './reducers/exchange-ideas/exchangeIdeasSlice';
import { exchangeIdeasApi } from './reducers/exchange-ideas/exchangeIdeasApi';
import { competenceMatricesReducer } from './reducers/matrices/competenceMatricesSlice';
import { competenceMatricesApi } from './reducers/matrices/competenceMatricesApi';
import { techReviewsReducer } from './reducers/tech-reviews/techReviewsSlice';
import { techReviewApi } from './reducers/tech-reviews/techReviewsApi';
import { techReviewsFiltersReducer } from './reducers/filters/techReviewsFiltersSlice';
import { booksReducer } from '@/store/reducers/libraries/booksSlice.ts';
import { bookCommentsApi } from '@/store/reducers/libraries/book-comments/bookCommentsApi.ts';
import { bookFilterApi } from '@/store/reducers/libraries/book-filter/bookFilterApi.ts';
import { bookFiltersReducer } from '@/store/reducers/libraries/book-filter/bookFilterSlice.ts';
import { bookScoreApi } from '@/store/reducers/libraries/book-comments/book-score/bookScoreApi.ts';
import { bookScoreReducer } from '@/store/reducers/libraries/book-comments/book-score/bookScoreSlice.ts';
import { competenceMatrixReducer } from '@/store/reducers/matrices/competenceMatrixSlice';
import { pmFeedbackReducer } from '@/store/reducers/tech-reviews/pmFeedbackSlice';
import {itemApi} from "./reducers/thing/ItemApi";

const rememberedReducers = [
    itemApi.reducerPath,

];

const rootReducer = combineReducers({
    [postApi.reducerPath]: postApi.reducer,

});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
    reducer: rememberedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(logErrorMiddleware)
            .concat(itemApi.middleware),

    enhancers: (getDefaultEnhancer) =>
        getDefaultEnhancer().concat(rememberEnhancer(window.localStorage, rememberedReducers)),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
