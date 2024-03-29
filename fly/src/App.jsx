import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Support from './components/Support/Support'
import Travelers from './components/Travelers/Travelers'
import Info from './components/Info/Info'
import Lounge from './components/Lounge/Lounge'
import Footer from './components/Footer/Footer'
import Subscribers from './components/Subscribers/Subscribers'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travelers/>
      <Subscribers/>
      <Footer/>


    </div>
  )
}

export default App