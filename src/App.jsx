import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import MoviesList from './components/MoviesList';

function App() {
    const [query, setQuery] = useState('');

    return (
        <Container fixed maxWidth="xl">
            <Typography variant="h1" align="center" mb={8}>
                Movie explorer
            </Typography>
            <SearchBar query={query} setQuery={setQuery}></SearchBar>
            <MoviesList query={query} />
        </Container>
    );
}

export default App;
