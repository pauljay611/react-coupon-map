import { createReducer } from 'typesafe-actions'
import { StoreState, ActionsType } from './types'
import actions from './actions'

const initialState: StoreState = {
	stores: []
}

const reducer = createReducer<StoreState, ActionsType>(
	initialState
).handleAction(actions.setAllStores, (_, actions) => ({
	stores: actions.payload
}))

export default reducer
