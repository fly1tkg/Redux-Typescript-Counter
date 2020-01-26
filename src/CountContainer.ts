import { Action } from 'typescript-fsa'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CountState, CountActions, CountReducer, countActions } from './CountReducer'
import { CountComponent} from './CountComponent'

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    countup: (n: number) => dispatch(countActions.countup(n)),
    countdown: (n: number) => dispatch(countActions.countdown(n)),
    slowHelloWorld: () => dispatch(countActions.slowHelloWorld())
  }
}

function mapStateToProps(countState: CountState) {
  return Object.assign({}, { count: countState.count })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountComponent)
