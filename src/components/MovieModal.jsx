import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Modal, Button } from '@mui/material';
import Spinner from './Spinner';
import { WIKIPEDIA } from '../utils/queries';
import { movieModalStyles } from '../utils/styleObjects';

const MovieModal = ({ title, open, close }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!open) return;
        handleSearch();
    }, [open]);

    const { wrapper, summary } = movieModalStyles;

    const handleSearch = async () => {
        const endpoint = WIKIPEDIA(title);
        const response = await fetch(endpoint);
        if (!response.ok) {
            console.log(response.statusText);
        }
        const json = await response.json();
        setLoading(false);
        setResults(json.query.search);
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
