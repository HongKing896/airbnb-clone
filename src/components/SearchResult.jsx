import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';
import styled from "styled-components";
import '../style/SearchResult.css';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
    checkIn,
    checkOut,
    addReserveInfo
}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleClick = () => {
        addReserveInfo({
            imageUrl: img,
            title: title,
            checkIn: checkIn,
            checkOut: checkOut,
            address: location
        });
        handleClickOpen();
    }
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />
            <reserveButtonSpan>
                <Button variant="contained" onClick={handleClick}>Reserve</Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">예약되었습니다.</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {title}숙소에 예약되었습니다.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            닫기
                        </Button>
                    </DialogActions>
                </Dialog>
            </reserveButtonSpan>
            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const reserveButtonSpan = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`;

export default SearchResult