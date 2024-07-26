import Button from '@mui/material/Button';
import React from "react";

function CountryButton({ countryName, onSeleted }) {

  return (
    <Button onClick={()=>onSeleted(countryName)}>{countryName}</Button>
  );
}

export default CountryButton