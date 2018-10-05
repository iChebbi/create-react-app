import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleSpinAnimation } from './duck/operations'

import { ReactComponent as SVGLogo } from './logo.svg'
import './Home.scss';

class Home extends Component {
  render() {
    const { shouldSpin, toggleSpinAnimation } = this.props
    return (
      <div className='App'>
        <header className='App-header'>
          <SVGLogo onClick={toggleSpinAnimation} className={shouldSpin ? 'App-logo Spin' : 'App-logo'} alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ home }) => ({ shouldSpin: home.shouldSpin })
const mapDispatchToProps = { toggleSpinAnimation }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
