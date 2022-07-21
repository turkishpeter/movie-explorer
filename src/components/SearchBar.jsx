import React, { useState, useRef } from 'react';
import { TextField, IconButton, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const searchButtonRef = useRef(null);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleClick = () => {
        console.log(query);
    };

    const handleKeyPress = (e) => {
        if (e.nativeEvent.key === 'Enter') {
            e.preventDefault();
            searchButtonRef.current.focus();
            console.log(query);
        }
    };

    return (
        <Box component="form">
            <TextField
                label="Enter a movie name"
                variant="outlined"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                size="medium"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClick}
                                ref={searchButtonRef}
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

export default SearchBar;
