import Footer from './components/Footer'
import Header from './components/Header'
import PropertyList from './components/property-list/PropertyList'
import Title from './components/Title'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main>
        <Title />
        <PropertyList />
      </main>
      <Footer />
    </div>
  )
}

export default App

