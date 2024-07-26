import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import React from 'react';
import DatePicker from './DatePiccker';

function DatePopover({ content,updateSearchInformation,dateType }){
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);
  const id = open ? 'DatePopover' : undefined;

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
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
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
      <DatePicker dateType={dateType} updateSearchInformation={updateSearchInformation} />
      </Popover>
    </div>
  )
}
export default DatePopover
