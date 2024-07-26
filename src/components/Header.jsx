import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { Link } from "react-router-dom";
import '../style/Header.css';
import SearchBar from './bar/SearchBar';


function Header({updateSearchInformation, updateNumberOfGuests ,searchInformation }) {
    return (
        <div className='header'>
            <div>
                <Link to='/'>
                    <img
                        className="header__icon"
                        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                        alt=""
                    />
                </Link>
                <div className='header__right'>
                    <p>Become a host</p>
                    <Link to="/myPage"><LanguageIcon /></Link>
                    <ExpandMoreIcon />
                    <Avatar />
                </div>
            </div>
            <SearchBar updateSearchInformation={updateSearchInformation} updateNumberOfGuests={updateNumberOfGuests} searchInformation={searchInformation} />
        </div>
    )
}

export default Header
