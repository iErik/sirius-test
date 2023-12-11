import { configureStore } from '@reduxjs/toolkit'

import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector
} from 'react-redux'

import reposReducer from './repos'


export const store = configureStore({
  reducer: {
    repos: reposReducer
  },

  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type DispatchFunc = () => AppDispatch

export const useDispatch: DispatchFunc = useReduxDispatch
export const useSelector: TypedUseSelectorHook<RootState> =
  useReduxSelector

export default store