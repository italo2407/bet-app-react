import React from 'react';
import Header from './components/Header'
import EventList from './components/EventList'

import './style/main.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <EventList />
    </div>
  );  
}

export default App;
