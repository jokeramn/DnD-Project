import React from 'react'
import Header from '../header'
import './app.css'
import 'normalize.css'
import { HomePage, CatalogPage, AboutPage } from '../pages'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {

  return (
    <Router>
      <div className='app'>
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/catalog' component={CatalogPage} />
        <Route exact path='/about' component={AboutPage} />
      </div>
    </Router>
  )
}


export default App