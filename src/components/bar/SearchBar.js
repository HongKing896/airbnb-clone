import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React from "react";
import styled from "styled-components";
import GuestPopover from '../modal/GuestPopover/GeustPopover';

const SearchBar = () => {
  return(
    <StyledSearchBar>
                <ButtonGroup variant="text" ria-label="Basic button group">
                  <GuestPopover content='who'></GuestPopover>
                  <GuestPopover content='check_in'></GuestPopover>
                  <GuestPopover content='check_out'></GuestPopover>
                  <GuestPopover content='who'></GuestPopover>
                  <Button><SearchIcon /></Button>
                </ButtonGroup>
            </StyledSearchBar>
  )
}
export default SearchBar

const StyledSearchBar = styled.div`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  max-width: fit-content;
  padding: 10px;
  height: 66px;
  border: 1px solid #dddddd;
  border-radius: 32px;
  box-shadow: 0 3px 12px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.08);
`;