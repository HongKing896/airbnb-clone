import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import SearchPage from './pages/SearchPage';


function App() {
  const [searchInformation, setSearchInformation] = useState({
    checkIn: null,
    checkOut: null,
    numberOfGuests: {
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0,
    },
    locationCountry: '',
  });

  const updateSearchInformation = (key, value) => {
    console.log(`updateSearchInformation called with key: ${key}, value: ${value}`);
    setSearchInformation(prevState => ({
      ...prevState,
      [key]: value
    }));
    console.log(searchInformation);
  };

  const updateNumberOfGuests = (guestType, count) => {
    setSearchInformation(prevState => ({
      ...prevState,
      numberOfGuests: {
        ...prevState.numberOfGuests,
        [guestType]: count
      }
    }));
    console.log(searchInformation);
  }

  const [reserveInfoList, setReserveInfoList] = useState([
    // {
    //   imageUrl: null,
    //   title: null,
    //   checkIn: null,
    //   checkOut: null,
    //   address: null,
    // }
  ]);
  const addReserveInfo = (newReserveInfo) => {
    setReserveInfoList(prevState => [...prevState, newReserveInfo]);
    console.log(reserveInfoList);
  };
  const updateReserveInfo = (index, key, value) => {
    console.log(`updateReserveInfo called with key: ${key}, value: ${value}`);
    setReserveInfoList(prevState => {
      const newState = [...prevState];
      newState = {
        ...newState[index],
        [key]: value
      };
      return newState;
    });
    console.log(reserveInfoList);
  };
  const removeReserveInfo = (index) => {
    setReserveInfoList(preState => preState.filter((_,i) => i !== index));
    console.log(reserveInfoList);
  };
  return (
    <div className="app">
      <Router>
        <Header updateSearchInformation={updateSearchInformation} updateNumberOfGuests={updateNumberOfGuests} searchInformation={searchInformation} />

        <Routes>
          <Route path="/search" element={<SearchPage searchInformation={searchInformation} addReserveInfo={addReserveInfo} />} />
          <Route path="/" element={<Home />} />
          <Route path='/myPage' element={<MyPage reserveInfoList={reserveInfoList} removeReserveInfo={removeReserveInfo} updateReserveInfo={updateReserveInfo}/>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
