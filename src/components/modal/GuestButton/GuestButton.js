import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const GuestButton = ({guestType})=>{
  const [numberOfGuests,setNumberOfGuests] = useState(0);

  function addNumberOfGuest(){
    setNumberOfGuests(prevNumberOfGuests => prevNumberOfGuests + 1);
  }
  function subtractNumberOfGuest(){
    setNumberOfGuests(prevNumberOfGuests => prevNumberOfGuests - 1);
  }
  return (
    <GuestButtonDiv>
      <h3>{guestType}</h3>
      <PlusMinusButtonDiv>
      <IconButton aria-label="subtract" onClick={subtractNumberOfGuest}>
        <RemoveIcon />
      </IconButton>
      <h3>{numberOfGuests}</h3>
      <IconButton aria-label="add" onClick={addNumberOfGuest}>
        <AddIcon />
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
  padding: 24px,4px,24px,0;
`;

const PlusMinusButtonDiv = styled.div`
  display: inline-flex;
  align-items: center;
  height: 32px;
  width: 104px;
`;

export default GuestButton