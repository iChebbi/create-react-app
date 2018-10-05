import types from './types'

const setSpinAnimationState = value => ({
  type: types.TOGGLE_SPIN_ANIMATION,
  payload: Boolean(value)
})

export { setSpinAnimationState }