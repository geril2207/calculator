import React from 'react'
import { useDispatch } from 'react-redux'

import deleteIcon from '../assets/delete.svg'
import {
  calcDelete,
  calcDeleteOne,
  calcEquals,
  calcInner,
  calcOperation,
} from '../redux/actions/calc'

const CalcGrid = () => {
  const dispatch = useDispatch()
  const dispatchInnerHandler = React.useCallback(
    (value) => {
      dispatch(calcInner(value))
    },
    [dispatch]
  )
  return (
    <div className="calc__grid">
      <div
        className="calc__grid_elem calc__grid_elem_1 calc__grid__delete"
        onClick={() => dispatch(calcDelete())}
      >
        Ac
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_2  calc__grid__delete"
        onClick={() => dispatch(calcDeleteOne())}
      >
        <img src={deleteIcon} alt="" />
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_3 calc__grid_operator"
        onClick={() => dispatch(calcOperation('%'))}
      >
        %
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_4 calc__grid_operator"
        onClick={() => dispatch(calcOperation('/'))}
      >
        /
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_5 calc__grid_number"
        onClick={() => dispatchInnerHandler(7)}
      >
        7
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_6 calc__grid_number"
        onClick={() => dispatchInnerHandler(8)}
      >
        8
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_7 calc__grid_number"
        onClick={() => dispatchInnerHandler(9)}
      >
        9
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_8 calc__grid_operator"
        onClick={() => dispatch(calcOperation('*'))}
      >
        <span>*</span>
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_9 calc__grid_number"
        onClick={() => dispatchInnerHandler(4)}
      >
        4
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_10 calc__grid_number"
        onClick={() => dispatchInnerHandler(5)}
      >
        5
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_11 calc__grid_number"
        onClick={() => dispatchInnerHandler(6)}
      >
        6
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_12 calc__grid_operator"
        onClick={() => dispatch(calcOperation('-'))}
      >
        -
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_13 calc__grid_number"
        onClick={() => dispatchInnerHandler(1)}
      >
        1
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_14 calc__grid_number"
        onClick={() => dispatchInnerHandler(2)}
      >
        2
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_15 calc__grid_number"
        onClick={() => dispatchInnerHandler(3)}
      >
        3
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_16 calc__grid_operator"
        onClick={() => dispatch(calcOperation('+'))}
      >
        +
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_17 calc__grid_number"
        onClick={() => dispatchInnerHandler(0)}
      >
        0
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_18 calc__grid_number"
        onClick={() => dispatchInnerHandler('.')}
      >
        <span>.</span>
      </div>
      <div
        className="calc__grid_elem calc__grid_elem_19 calc__grid_equals"
        onClick={() => dispatch(calcEquals())}
      >
        =
      </div>
    </div>
  )
}

export default CalcGrid
