/** @jsx jsx */
import React from 'react'
import { Global, css, jsx } from '@emotion/core'

import Header from './components/Header'
import Bpm from './components/Bpm'
import Footer from './components/Footer'

import { STYLE } from './constants'

const globalStyle = css`
  @font-face {
    font-family: 'PetMe128';
    src: local('PerMe128'), url(./fonts/PetMe128.ttf) format('trutype');
  }
  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    background-color: ${STYLE.COLOR.BACKGROUND};
  }
`

const appStyle = css`
  position: relative;
  height: 100vh;
  width: 100vw;
`

const App: React.FC = () => {
  return (
    <div css={appStyle} className="App">
      <Global styles={globalStyle} />
      <Header />
      <Bpm />
      <Footer />
    </div>
  )
}

export default App
