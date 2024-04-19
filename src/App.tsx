import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal from './global'
import Container from './components/Hero/styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container/>
      <ListaVagas />
    </>
  )
}

export default App
