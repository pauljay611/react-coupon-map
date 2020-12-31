import { createReducer } from 'typesafe-actions'
import { StoreState, ActionsType } from './types'

const initialState: StoreState = {
	stores: []
}

const reducer = createReducer<StoreState, ActionsType>(initialState)

export default reducer
