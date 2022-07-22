import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Box,
    Chip,
    Stack,
    Typography,
    Divider,
    Button,
} from '@mui/material';
import MovieModal from './MovieModal';
import { movieItemStyles } from '../utils/styleObjects';
import { RELATED } from '../utils/constants';

const MovieItem = ({ movieData, setQueryType, setRelatedMovies }) => {
    const [isOpen, setIsOpen] = useState(false);
    const relatedMovies = movieData.similar.map((movie) => movie.id);

    const handleRelatedMovies = (related) => {
        setQueryType(RELATED);
        setRelatedMovies(relatedMovies);
    };
    const openModal = () => {
        setIsOpen(true);
    };
    const { title, wrapper, content, details } = movieItemStyles;
    return (
        <Grid item xs={12}>
            <Box sx={wrapper}>
                <MovieModal
                    title={movieData.name}
                    open={isOpen}
                    close={() => setIsOpen(false)}
                />
                <Box sx={content}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography
                                onClick={openModal}
                                gutterBottom
                                variant="h4"
                                component="div"
                                sx={title}
                            >
                                {movieData.name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                            >
                                {movieData.score}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider variant="middle" />
                <Box sx={details}>
                    <Typography gutterBottom variant="body1">
                        Categories
                    </Typography>
                    <Stack direction="row" spacing={1} mb={4}>
                        {movieData.genres.map((genre) => (
                            <Chip
                                color="primary"
                                key={genre.name}
                                label={genre.name}
                            ></Chip>
                        ))}
                    </Stack>
                    <Button onClick={handleRelatedMovies} variant="outlined">
                        Show related movies
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
};

MovieItem.propTypes = {
    movieData: PropTypes.object,
    setQueryType: PropTypes.func,
    setRelatedMovies: PropTypes.func,
};

export default MovieItem;
