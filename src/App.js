import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [reserveInformation, setReserveInformation] = useState({
    checkIn: null,
    checkOut: null,
    numberOfGuests: {
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0,
    },
    country: '',
  });

  const updateReserveInformation = (key, value) => {
    setReserveInformation(prevState => ({
      ...prevState,
      [key]: value
    }));
    console.log(reserveInformation);
  };

  const updateNumberOfGuests = (guestType, count) => {
    setReserveInformation(prevState => ({
      ...prevState,
      numberOfGuests: {
        ...prevState.numberOfGuests,
        [guestType]: count
      }
    }));
    console.log(reserveInformation);
  }
  return (
    <div className="app">
      <Router>
        <Header updateReserveInformation={updateReserveInformation} updateNumberOfGuests={updateNumberOfGuests}/>
        
        <Routes>
          <Route path="/search" element={<SearchPage reserveInformation={reserveInformation}/>} />
          <Route path="/" element={<Home />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
