/* eslint-disable import/no-unresolved */
import React from 'react'
import { StoreContext } from 'storeon/react'
import store from '@store'
import Page from '@pages'
import './App.css'

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Page />
      </div>
    </StoreContext.Provider>
  )
}

export default App
