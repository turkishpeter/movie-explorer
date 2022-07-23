import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Modal, Button } from '@mui/material';
import Spinner from './Spinner';
import { WIKIPEDIA, GOOGLE } from '../utils/queries';
import { GOOGLE_APP_ID, GOOGLE_SE_ID } from '../utils/apiKeys';
import { handleMovieLinks } from '../services/movieLinks';
import { movieModalStyles } from '../utils/styleObjects';

const MovieModal = ({ title, open, close }) => {
    const [results, setResults] = useState([]);
    const [imdbResults, setImdbResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imdbError, setImdbError] = useState('');
    useEffect(() => {
        if (!open) return;
        handleMovieLinks(
            title,
            setLoading,
            setResults,
            setImdbResults,
            setImdbError,
            { WIKIPEDIA, GOOGLE },
            { GOOGLE_APP_ID, GOOGLE_SE_ID }
        );
    }, [open]);

    const { wrapper, summary } = movieModalStyles;

    const createSummary = (result) => {
        return { __html: result };
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={wrapper}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        {title}
                    </Typography>
                    {loading ? (
                        <Spinner size={40} />
                    ) : (
                        results.map((result) => (
                            <div key={result.pageid}>
                                <Typography
                                    dangerouslySetInnerHTML={createSummary(
                                        result.snippet
                                    )}
                                    id="modal-modal-description"
                                    sx={summary}
                                ></Typography>
                                <Button
                                    variant="text"
                                    href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                                    target="_blank"
                                >
                                    Wikipedia
                                </Button>
                                {imdbError ? (
                                    <Typography color="error">
                                        {imdbError}
                                    </Typography>
                                ) : (
                                    <Button
                                        variant="text"
                                        href={imdbResults[0]?.link}
                                        target="_blank"
                                    >
                                        IMDB
                                    </Button>
                                )}
                            </div>
                        ))
                    )}
                </Box>
            </Modal>
        </div>
    );
};

MovieModal.propTypes = {
    title: PropTypes.string,
    open: PropTypes.bool,
    close: PropTypes.func,
};

export default MovieModal;
