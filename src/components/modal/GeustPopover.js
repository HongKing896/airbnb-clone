import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Popover from '@mui/material/Popover';
import React from 'react';
import GuestBotton from './GuestButton/GuestButton';
function GuestPopover({content}){
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
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
        <ButtonGroup
          orientation="vertical"
          aria-label="Vertical button group"
          variant="text"
        >
          <GuestBotton guestType="성인"></GuestBotton>
          <GuestBotton guestType="어린이"></GuestBotton>
          <GuestBotton guestType="유아"></GuestBotton>
          <GuestBotton guestType="반려동물"></GuestBotton>
        </ButtonGroup>
      </Popover>
    </div>
  )
}

export default GuestPopover