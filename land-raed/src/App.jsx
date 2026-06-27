import Footer from './components/Footer'
import Header from './components/Header'
import PropertyList from './components/property-list/PropertyList'
import Title from './components/Title'
import properties from './data/properties'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main>
        <Title />
        <PropertyList properties={properties}/>
      </main>
      <Footer />
    </div>
  )
}

export default App

