import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => (
  <>
    <Paper component='form' onSubmit={() => {}} sx={{ borderRadius: 20, border: '1px solid #232323', pl: 2, boxShadow: 'none', mr: { sm: 5 } }}>
      <input className='search-bar' placeholder='search...' onChange={() => {}} value='' style={{ textAlign: 'center' }} />
      <IconButton>
        <SearchIcon type='submit' sx={{ p: '10px', color: 'red' }} />
      </IconButton>
    </Paper>
  </>
);

export default SearchBar;
