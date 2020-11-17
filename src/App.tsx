import React from 'react';
import Header from './components/Header'
import EventList from './components/EventList'
import { AppProvider } from './context';

import './style/main.css';

const App = () => {
  return (
    <AppProvider>
      <Header />
      <EventList />
    </AppProvider>
  );  
}

export default App;
