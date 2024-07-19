import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Banner.css';
import Search from './Search';

function Banner() {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
        </div>
    )
}

export default Banner
