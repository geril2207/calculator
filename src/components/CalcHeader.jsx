import React from 'react'
import { useSelector } from 'react-redux'

const CalcHeader = () => {
  const { operationString, number, result, showResult } = useSelector(
    (state) => state.calc
  )

  const checkLengthOne = () => {
    if (operationString.length >= 9) {
      return 308 / operationString.length
    }
    return 20
  }
  const checkLengthTwo = () => {
    if (number.length >= 9) {
      return 308 / number.length
    }
    if (result.length >= 9) {
      return 308 / result.length
    }
    return 48
  }
  return (
    <>
      <div
        style={{
          fontSize: `${checkLengthOne()}px`,
        }}
        className={`calc__result ${
          operationString === '0'
            ? 'calc__result_transparent'
            : 'calc__result_visible'
        }`}
      >
        {operationString}
      </div>
      <div
        style={{
          fontSize: `${checkLengthTwo()}px`,
        }}
        className="calc__input"
      >
        {showResult ? result : number}
      </div>
    </>
  )
}

export default CalcHeader
