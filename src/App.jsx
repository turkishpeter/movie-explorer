import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import Movies from './components/Movies';

function App() {
    const [query, setQuery] = useState('');

    return (
        <Container fixed maxWidth="xl">
            <Typography variant="h1" align="center" mb={8}>
                Movie explorer
            </Typography>
            <SearchBar query={query} setQuery={setQuery}></SearchBar>
            <Movies query={query} />
        </Container>
    );
}

export default App;
