import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import React from 'react';
import SearchResult from "../components/SearchResult";
import dummyData from '../data/hotelData';
import '../style/SearchPage.css';

function SearchPage({searchInformation,addReserveInfo}) {
    const { numberOfGuests, checkIn, checkOut, locationCountry } = searchInformation;

    const checkInDate = dayjs(checkIn);
    const checkOutDate = dayjs(checkOut);
    const duration = checkOutDate.diff(checkInDate, 'day');

    const filteredData = dummyData.filter(item => {
        const totalGuests = numberOfGuests.adults + numberOfGuests.children;
        const isPetFriendlyRequired = numberOfGuests.pets > 0;
        return (
        item.availableGuests >= totalGuests &&
        item.locationCountry === locationCountry &&
        //item.isAvailable &&
        (!isPetFriendlyRequired || item.petFriendly)
        );
    });
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            {filteredData.map((item, index) => (
                <SearchResult
                img={item.imageUrl}
                location={item.locationCountry}
                title={item.name}
                description={item.description}
                star={4.73}
                price={"£" + item.price + " / night"}
                total={`£ ${item.price*duration} total`}
                checkIn={checkIn}
                checkOut={checkOut}
                addReserveInfo={addReserveInfo}
            />
            ))}
        </div>
    )
}

export default SearchPage
