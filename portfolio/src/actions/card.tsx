import * as types from './index'
import { createAction } from '@reduxjs/toolkit'

export const flipCard = createAction(types.FLIP_CARD)