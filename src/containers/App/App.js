import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes'

const App = _ => {
  return (
    <div className="app">
      <BrowserRouter>        
        <Routes/>
      </BrowserRouter>      
    </div>
  )
}
export default App