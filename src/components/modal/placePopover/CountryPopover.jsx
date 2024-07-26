import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Popover from '@mui/material/Popover';
import React from 'react';
import CountryButton from './CountryButton';

function CountryPopover({ content,updateSearchInformation }){
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCountrySelect = (country) => {
    updateSearchInformation('locationCountry', country);
    handleClose();
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
          {['USA', 'Canada', 'Germany', 'Mexico', 'Japan', 'Italy', 'Brazil', 'UK', 'South Korea'].map(country => (
            <CountryButton key={country} countryName={country} onSeleted={handleCountrySelect} />
          ))}
        </ButtonGroup>
      </Popover>
    </div>
  )
}
export default CountryPopover
