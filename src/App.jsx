import React from 'react'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'

const App = () => {
  return (
    <div className="bg-(--white) min-h-screen">
      <Hero />
      <HomeCards />
    </div>
  )
}

export default App
