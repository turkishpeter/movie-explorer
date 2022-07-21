import React from 'react';
import PropTypes from 'prop-types';
import { Grid, CircularProgress } from '@mui/material';
import { useQuery } from '@apollo/client';
import { MOVIES } from '../utils/queries';
import CardWrapper from './CardWrapper';

const Movies = ({ query }) => {
    const { loading, error, data } = useQuery(MOVIES, {
        variables: { name: query },
    });
    return (
        <>
            {loading ? (
                <Grid container alignItems="center">
                    <Grid item container justifyContent="center" xs={12}>
                        <CircularProgress size={80} />
                    </Grid>
                </Grid>
            ) : (
                <Grid container spacing={4}>
                    {data?.searchMovies?.map((movie) => (
                        <CardWrapper key={movie.id} cardData={movie} />
                    ))}
                </Grid>
            )}
        </>
    );
};

Movies.propTypes = {
    query: PropTypes.string,
};

export default Movies;
