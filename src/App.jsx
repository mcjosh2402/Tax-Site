import React from 'react'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import FormCards from './components/FormCards'

const App = () => {
  return (
    <div className="bg-(--white) min-h-screen">
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <FormCards />
      </div>


    </div>
  )
}

export default App
