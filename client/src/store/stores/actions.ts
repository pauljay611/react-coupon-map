import { createAction } from 'typesafe-actions'
import constants from './constants'

export const getAllStores = createAction(constants.GET_ALL_STORES)()

export const getStore = createAction(constants.GET_STORE, (id: number) => id)()

export default {
	getAllStores,
	getStore
} as const
