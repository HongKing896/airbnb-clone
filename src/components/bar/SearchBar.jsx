import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DatePopover from '../modal/datePopover/DatePopover';
import GuestPopover from '../modal/guestPopover/GeustPopover';
import CountryPopover from '../modal/placePopover/CountryPopover';

const SearchBar = ({ updateSearchInformation, updateNumberOfGuests,searchInformation}) => {
  const navigate = useNavigate();
  
  let typeCheckIn = "checkIn";
  let typeCheckOut = "checkOut";

  return(
    <StyledSearchBar>
      <ButtonGroup variant="text" ria-label="search bar button group">
        <CountryPopover content={searchInformation.locationCountry || "where"} updateSearchInformation={updateSearchInformation} ></CountryPopover>
        <DatePopover content={searchInformation.checkIn ||'checkIn'} updateSearchInformation={updateSearchInformation} dateType={typeCheckIn} />
        <DatePopover content={searchInformation.checkOut ||'checkOut' }updateSearchInformation={updateSearchInformation} dateType={typeCheckOut} />
        <GuestPopover content='who' updateNumberOfGuests={updateNumberOfGuests}></GuestPopover>
      <Button onClick={() => navigate('/search')}><SearchIcon /></Button>
    </ButtonGroup>
  </StyledSearchBar>
  )
}
export default SearchBar

const StyledSearchBar = styled.div`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  max-width: fit-content;
  padding: 10px;
  height: 66px;
  border: 1px solid #dddddd;
  border-radius: 32px;
  box-shadow: 0 3px 12px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.08);
`;