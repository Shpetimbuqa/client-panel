import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import AppNavBar from './components/layout/AppNavBar'
import Dashboard from './components/layout/Dashboard'
import AddClient from './components/clients/AddClient'
import ClientDetails from './components/clients/ClientDetails'
import './App.css'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>
            <div className='App'>
              <AppNavBar />
              <div className='container'>
                <Routes>
                  <Route exact path='/' element={<Dashboard />} />
                  <Route exact path='/client/add' element={<AddClient />} />
                  <Route exact path='/client/:id' element={<ClientDetails />} />
                </Routes>
              </div>
            </div>
          </Router>
        </Provider>
    )
  }
}

export default App
