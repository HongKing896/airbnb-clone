import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const GuestButton = ({ guestType, updateNumberOfGuests })=>{
  const [numberOfGuests,setNumberOfGuests] = useState(0);

  function addNumberOfGuest() {
    setNumberOfGuests(prevNumberOfGuests => {
      const newNumberOfGuests = prevNumberOfGuests + 1;
      updateNumberOfGuests(guestType, newNumberOfGuests);
      return newNumberOfGuests;
    });
  }
  
  function subtractNumberOfGuest() {
    setNumberOfGuests(prevNumberOfGuests => {
      const newNumberOfGuests = prevNumberOfGuests - 1;
      updateNumberOfGuests(guestType, newNumberOfGuests);
      return newNumberOfGuests;
    });
  }
  return (
    <GuestButtonDiv>
      <h3>{guestType}</h3>
      <PlusMinusButtonDiv>
      <IconButton aria-label="subtract" onClick={subtractNumberOfGuest} disabled={numberOfGuests <= 0}>
        <RemoveCircleOutlineIcon />
      </IconButton>
      <h3>{numberOfGuests}</h3>
      <IconButton aria-label="add" onClick={addNumberOfGuest}>
        <AddCircleOutlineIcon />
      </IconButton>
      </PlusMinusButtonDiv>
    </GuestButtonDiv>
    
  )
}

const GuestButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 330px;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  flex-wrap: wrap;
  padding: 24px 4px 24px 0;

  &:last-child {
    border-bottom: none;
  }
`;

const PlusMinusButtonDiv = styled.div`
  display: inline-flex;
  align-items: center;
  height: 32px;
  width: 104px;
`;

export default GuestButton