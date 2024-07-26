import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';
import styled from 'styled-components';

const ReservationCard = ({ reserveInfo, updateReserveInfo, removeReserveInfo }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (answer) => {
    setOpen(false);
    if (answer) {
      removeReserveInfo();
      console.log('삭제됨');
    }
  };
  return (
    <Card>
      <CardContent>
        <Title>{reserveInfo.title}</Title>
        <Date>{reserveInfo.checkIn}</Date>
        <Date>{reserveInfo.checkOut}</Date>
        <Address>{reserveInfo.address}</Address>
        <StyledButton onClick={handleClickOpen}>Cancel</StyledButton>
      </CardContent>
      <CardImage src={reserveInfo.imageUrl} alt={reserveInfo.title} />
      <Dialog
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">취소하시겠습니까?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            이 작업은 되돌릴 수 없습니다. 예약을 정말로 취소하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            아니오
          </Button>
          <Button onClick={() => handleClose(true)} color="primary" autoFocus>
            예
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default ReservationCard;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  max-width: 1200px;
  max-height: 600px;
`

const CardImage = styled.img`
  width: 50%;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

const Date = styled.p`
  font-size: 1em;
  color: #555;
`;

const Host = styled.p`
  font-size: 1em;
  margin: 0;
`;

const Address = styled.p`
  font-size: 1em;
  color: #777;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 10px;
    &:hover {
      background-color: #0056b3;
    }
  }
`;
