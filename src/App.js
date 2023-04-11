// NOTE: to get react boilerplate, type 'rafce'
import React from 'react'
import './App.css'

//using index.js in 'components' and 'containers' folders make importing necessary files easy, keeping the code clean and concise.
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import{Cta, Brand, Navbar} from './components'

const App = () => {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
    </div>
  )
}

export default App