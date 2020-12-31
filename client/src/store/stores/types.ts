import { ActionType } from 'typesafe-actions'
import { IStore } from '../../types'
import * as actions from './actions'

export interface StoreState {
	readonly stores: IStore[]
}

export type ActionsType = ActionType<typeof actions>

export type RootState = {
	weather: StoreState
}
