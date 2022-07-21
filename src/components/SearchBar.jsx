import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, IconButton, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setQuery }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const searchButtonRef = useRef(null);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleClick = () => {
        setQuery(searchQuery);
    };

    const handleKeyPress = (e) => {
        if (e.nativeEvent.key === 'Enter') {
            e.preventDefault();
            setQuery(searchQuery);
            searchButtonRef.current.focus();
        }
    };

    return (
        <Box component="form" mb={8}>
            <TextField
                label="Enter a movie name"
                variant="outlined"
                onKeyPress={handleKeyPress}
                value={searchQuery}
                onChange={handleChange}
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

SearchBar.propTypes = {
    setQuery: PropTypes.func,
};

export default SearchBar;
