import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Popover from '@mui/material/Popover';
import React from 'react';
import CountryButton from './CountryButton';

function CountryPopover({ content,updateReserveInformation }){
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'CountryPopover' : undefined;

  return (
    <div>
      <Button aria-describedby={content+"_button"} onClick={handleClick}>
        {content}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            sx: {
              borderRadius: '32px',
              padding: '16px 32px',
              backgroundColor: '#fff',
              boxShadow: '0 3px 12px 0 rgb(0 0 0/0.15)',
              marginTop: '12px',
            },
          },
        }}
      >
        <ButtonGroup variant="text" orientation="vertical">
        <CountryButton countryName="USA" updateReserveInformation={updateReserveInformation}></CountryButton>
        <CountryButton countryName="Canada" updateReserveInformation={updateReserveInformation}></CountryButton>
        <CountryButton countryName="Germany" updateReserveInformation={updateReserveInformation}></CountryButton>
        <CountryButton countryName="Mexico" updateReserveInformation={updateReserveInformation}></CountryButton>
        <CountryButton countryName="Japan" updateReserveInformation={updateReserveInformation}></CountryButton>
        <CountryButton countryName="Italy" updateReserveInformation={updateReserveInformation}></CountryButton>
        <CountryButton countryName="Brazil" updateReserveInformation={updateReserveInformation}></CountryButton>
        <CountryButton countryName="UK" updateReserveInformation={updateReserveInformation}></CountryButton>
        <CountryButton countryName="South Korea" updateReserveInformation={updateReserveInformation}></CountryButton>
        </ButtonGroup>
      </Popover>
    </div>
  )
}
export default CountryPopover
