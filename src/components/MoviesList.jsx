import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { MOVIES_QUERY, RELATED_QUERY } from '../utils/queries';
import MovieItem from './MovieItem';
import Spinner from './Spinner';
import { STANDARD, RELATED } from '../utils/constants';

const MoviesList = ({ query }) => {
    const [queryType, setQueryType] = useState(STANDARD);
    const [relatedMovies, setRelatedMovies] = useState(null);

    useEffect(() => {
        setQueryType(STANDARD);
    }, [query]);

    const queryChooser = (type) => {
        if (type === STANDARD) return MOVIES_QUERY.query;
        if (type === RELATED) return RELATED_QUERY.query;
    };

    const keyChooser = (type) => {
        if (type === STANDARD) return MOVIES_QUERY.keyName;
        if (type === RELATED) return RELATED_QUERY.keyName;
    };

    const queryVariables = (type) => {
        if (type === STANDARD) {
            return {
                variables: { name: query },
            };
        }
        if (type === RELATED) {
            return {
                variables: { ids: relatedMovies },
            };
        }
    };

    const { loading, error, data } = useQuery(
        queryChooser(queryType),
        queryVariables(queryType)
    );

    if (!query)
        return (
            <Typography variant="h3" align="center">
                Search for movies
            </Typography>
        );
    if (loading) return <Spinner size={120} />;
    if (error) return <Typography variant="h3">{error.message}</Typography>;
    return (
        <Grid container spacing={4}>
            {relatedMovies?.length === 0 && queryType === RELATED && (
                <Typography variant="h3" align="center">
                    This title does not have any related items
                </Typography>
            )}
            {data[keyChooser(queryType)]?.map((movie) => (
                <MovieItem
                    key={movie.id}
                    movieData={movie}
                    setQueryType={setQueryType}
                    setRelatedMovies={setRelatedMovies}
                />
            ))}
        </Grid>
    );
};

MoviesList.propTypes = {
    query: PropTypes.string,
};

export default MoviesList;
