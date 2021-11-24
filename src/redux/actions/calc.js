import {
  CALC_DELETE,
  CALC_DELETE_ONE,
  CALC_EQUALS,
  CALC_INNER,
  CALC_OPERATION,
} from './actionTypes'

export const calcOperation = (value) => ({
  type: CALC_OPERATION,
  payload: value,
})

export const calcInner = (value) => ({
  type: CALC_INNER,
  payload: value,
})

export const calcDeleteOne = () => ({
  type: CALC_DELETE_ONE,
})
export const calcDelete = () => ({
  type: CALC_DELETE,
})

export const calcEquals = () => ({
  type: CALC_EQUALS,
})
