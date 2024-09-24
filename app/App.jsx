import React from 'react'
import Hero from './components/hero/Hero'
import Brand from './components/brand/Brand'
import About from './components/about/About'
import Popular from './components/popular/Popular'
import Timeline from './components/timeline/Timeline'
import Blog from './components/blog/Blog'

const App = () => {
  return (
    <>
        <Hero/>
        <Brand/>
        <About/>
        <Popular/>
        <Timeline/>
        <Blog/>
    </>
  )
}

export default App