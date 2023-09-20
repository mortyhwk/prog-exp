import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './interfaces/Auth/reducer'
import { languageReducer } from './interfaces/LanguageSelectorDropdown/reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    language: languageReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']