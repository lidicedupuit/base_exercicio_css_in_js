import React from 'react'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'


function App() {
  return (
    <>
      <header> Ebac Jobs </header>
      <Hero> As melhores vagas para tecnologia, design e artes visuais.</Hero>
      <div className="containers">
      <ListaVagas />
     </div>
    </>
  )

}
export default App
