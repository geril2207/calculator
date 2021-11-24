import {
  CALC_DELETE,
  CALC_DELETE_ONE,
  CALC_EQUALS,
  CALC_INNER,
  CALC_OPERATION,
} from '../actions/actionTypes'
import { evaluate } from 'mathjs'
const initState = {
  number: '0',
  allNumbers: [],
  operation: [],
  operationString: '0',
  result: null,
  showResult: false,
}

const showOperationString = (state) => {
  let string = ''
  for (let key in state.allNumbers) {
    string += state.allNumbers[key]
    string += state.operation[key]
  }
  return string
}

const calcReducer = (state = initState, action) => {
  switch (action.type) {
    case CALC_OPERATION:
      const newState = {
        ...state,
        number: '0',
        operation: [...state.operation, action.payload],
        allNumbers: [...state.allNumbers, state.number],
      }

      return {
        ...newState,
        operationString: showOperationString(newState),
        showResult: false,
      }

    case CALC_INNER:
      let number
      if (
        (state.number == '0' && action.payload !== '.') ||
        state.number == 'result' ||
        state.number == state.result
      ) {
        number = action.payload.toString()
      } else {
        number = state.number + action.payload.toString()
      }
      if (state.number.length >= 10) {
        return { ...state }
      }
      return { ...state, number }
    case CALC_DELETE:
      return { ...initState }
    case CALC_DELETE_ONE:
      let newNumber
      newNumber =
        // eslint-disable-next-line eqeqeq
        state.number == '0'
          ? 0
          : !!state.number.slice(0, state.number.length - 1)
          ? state.number.slice(0, state.number.length - 1)
          : 0

      return {
        ...state,
        number: newNumber,
      }

    case CALC_EQUALS:
      let result
      let string = state.operationString + state.number
      if (state.result === null) {
        result = evaluate(string)
      } else {
        const operator = state.operation[state.operation.length - 1]
        const stringEval =
          state.result.toString() + operator + state.number.toString()
        result = evaluate(stringEval)
      }

      return { ...state, showResult: true, result, operationString: string }
    default:
      return state
  }
}

export default calcReducer
