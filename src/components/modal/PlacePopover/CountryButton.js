import Button from '@mui/material/Button';
import React from "react";

function CountryButton({ countryName, updateReserveInformation }) {
  const chooseCountry = (event) => {
    updateReserveInformation('locationCountry', event.target.value);
  };

  return (
    <Button onClick={chooseCountry} value={countryName}>{countryName}</Button>
  );
}

export default CountryButton