import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import Routes from '../../routes'

const App = _ => {
  return (
    <div className="app">
      <BrowserRouter>
        <TopBar />
        
        <Routes/>
      </BrowserRouter>      
    </div>
  )
}
export default App