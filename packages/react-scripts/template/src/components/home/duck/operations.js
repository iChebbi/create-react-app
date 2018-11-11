/* eslint-disable import/prefer-default-export */
import { setSpinAnimationState } from './actions'

const toggleSpinAnimation = () => (dispatch) => {
  dispatch(setSpinAnimationState())
}

export { toggleSpinAnimation }
