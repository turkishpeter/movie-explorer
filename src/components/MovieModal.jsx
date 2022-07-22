import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Modal, Button } from '@mui/material';
import Spinner from './Spinner';
import { WIKIPEDIA, GOOGLE } from '../utils/queries';
import { GOOGLE_APP_ID, GOOGLE_SE_ID } from '../utils/apiKeys';
import { movieModalStyles } from '../utils/styleObjects';

const MovieModal = ({ title, open, close }) => {
    const [results, setResults] = useState([]);
    const [imdbResults, setImdbResults] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!open) return;
        handleSearch();
    }, [open]);

    const { wrapper, summary } = movieModalStyles;

    const handleSearch = async () => {
        const endpointWiki = WIKIPEDIA(title);
        const endpointGoogle = GOOGLE(GOOGLE_APP_ID, GOOGLE_SE_ID, title);
        const responseWiki = await fetch(endpointWiki);
        if (!responseWiki.ok) {
            console.log(responseWiki.statusText);
        }
        const json = await responseWiki.json();
        setLoading(false);
        setResults(json.query.search);
        const responseGoogle = await fetch(endpointGoogle);
        if (!responseWiki.ok) {
            console.log(responseGoogle.statusText);
        }
        const googleJson = await responseGoogle.json();
        setImdbResults(googleJson.items);
    };

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
                                <Button
                                    variant="text"
                                    href={imdbResults[0]?.link}
                                    target="_blank"
                                >
                                    IMDB
                                </Button>
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
