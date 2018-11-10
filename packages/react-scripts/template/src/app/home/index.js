import { connect } from 'react-redux'
import { toggleSpinAnimation } from './duck/operations'
import { withReducer } from 'react-redux-dynamic-reducer'
import reducer from './duck/reducer'

import Home from './Home'

const mapStateToProps = ({ home }) => ({ shouldSpin: home.shouldSpin })
const mapDispatchToProps = { toggleSpinAnimation }

const componentWithReducer = withReducer(reducer, 'home')(Home)
export default connect(mapStateToProps, mapDispatchToProps)(componentWithReducer)
