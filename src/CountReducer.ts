import actionCreatorFactory, { Action } from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

const actionCreator = actionCreatorFactory()

export interface CountActions {
  countup: (n: number) => void
  countdown: (n: number) => void
  slowHelloWorld:() => void
}

export const countActions = {
  countup: actionCreator<number>('ACTIONS_COUNTUP'),
  countdown: actionCreator<number>('ACTIONS_COUNTDOWN'),
  slowHelloWorld: actionCreator<void>('ACTIONS_SLOW_HELLO_WORLD')
}

export interface CountState {
  count: number
}

const initialState: CountState = {
  count: 0
}

export const CountReducer = reducerWithInitialState(initialState)
.case(countActions.countup,
  (state, n) => {
    return Object.assign({}, state, { count: state.count + n })
  }
)
.case(countActions.countdown,
  (state, n) => {
    return Object.assign({}, state, { count: state.count - n })
  }
)
