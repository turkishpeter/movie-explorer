import React from 'react';
import SearchBar from './components/SearchBar';
import { Container, Typography } from '@mui/material';

function App() {
    return (
        <Container fixed maxWidth="xl">
            <Typography variant="h1" align="center">
                Movie explorer
            </Typography>
            <SearchBar></SearchBar>
        </Container>
    );
}

export default App;
