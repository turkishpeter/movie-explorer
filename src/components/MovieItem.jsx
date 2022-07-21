import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Box, Chip, Stack, Typography } from '@mui/material';
import MovieAccordion from './MovieAccordion';

const MovieItem = ({ movieData }) => {
    console.log(movieData);
    return (
        <Grid item xs={12}>
            <Box>
                <Paper elevation={3}>
                    <MovieAccordion title={movieData.name}></MovieAccordion>
                    <Stack mt={3} direction="row" spacing={1}>
                        {movieData.genres.map((genre) => (
                            <Chip key={genre.name} label={genre.name}></Chip>
                        ))}
                    </Stack>
                    <div>
                        <Typography variant="h5" component="span">
                            Score:{' '}
                        </Typography>
                        <Typography variant="h5" component="span">
                            {movieData.score}
                        </Typography>
                    </div>
                </Paper>
            </Box>
        </Grid>
    );
};

MovieItem.propTypes = {
    movieData: PropTypes.object,
};

export default MovieItem;
