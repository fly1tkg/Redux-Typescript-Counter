import * as React from 'react'
import { useState } from 'react'
import { CountState, CountActions } from './CountReducer'

interface OwnProps {}

type CountProps = OwnProps & CountState & CountActions

export const CountComponent: React.FC<CountProps> = ({
  count,
  countup,
  countdown,
  ...props
}) => {

  const [countValue, setCountValue] = useState(0)
  return (
    <div>
        <p>{count}</p>
        <input type="text" value={countValue} onChange={(e) => { setCountValue(parseInt(e.target.value) || 0)}}></input>
        <button onClick={() => {countup(countValue)}}>up</button>
        <button onClick={() => {countdown(countValue)}}>down</button>
    </div>
  )
}
