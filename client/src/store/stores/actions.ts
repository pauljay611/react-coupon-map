import { createAction } from 'typesafe-actions'
import { IStore } from '../../types'
import constants from './constants'

export const getAllStores = createAction(constants.GET_ALL_STORES)()

export const setAllStores = createAction(
	constants.SET_ALL_STORES,
	(stores: IStore[]) => stores
)()

export const setAllStoresError = createAction(
	constants.SET_ALL_STORES_ERROR,
	(stores: IStore[]) => stores
)()

export const getStore = createAction(constants.GET_STORE, (id: number) => id)()

export default {
	getAllStores,
	getStore,
	setAllStores
} as const
