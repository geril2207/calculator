import React from 'react'
import { useSelector } from 'react-redux'

const CalcHeader = () => {
  const { operationString, number, result, showResult } = useSelector(
    (state) => state.calc
  )
  console.log(number.length)
  return (
    <>
      <div
        style={{
          fontSize:
            number.length <= 9
              ? '24px'
              : operationString.length <= 9
              ? '24px'
              : 308 / operationString.length,
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
          fontSize:
            number.length <= 9
              ? '48px'
              : operationString.length <= 9
              ? '48px'
              : 308 / number.length,
        }}
        className="calc__input"
      >
        {showResult ? result : number}
      </div>
    </>
  )
}

export default CalcHeader
