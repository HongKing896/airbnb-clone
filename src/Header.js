import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
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
                    <LanguageIcon />
                    <ExpandMoreIcon />
                    <Avatar />
                </div>
            </div>

            <div className='header__center'>
                <ButtonGroup variant="text" ria-label="Basic button group">
                    <Button>
                        <div className='header__button'>
                            <p>여행지</p>
                            <p>여행지 검색</p>
                        </div>
                    </Button>
                    <Button>가는 날</Button>
                    <Button>오는 날</Button>
                    <Button>여행지 추가</Button>
                    <Button><SearchIcon /></Button>
                </ButtonGroup>
            </div>

        </div>
    )
}

export default Header
