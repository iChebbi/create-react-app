import { setSpinAnimationState } from './actions'

const toggleSpinAnimation = () => (dispatch, getState) => {
  const shouldSpin = !getState().home.shouldSpin
  dispatch(setSpinAnimationState(shouldSpin))
}

export { toggleSpinAnimation }