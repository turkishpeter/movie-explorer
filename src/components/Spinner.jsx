import React from 'react';
import PropTypes from 'prop-types';
import { Grid, CircularProgress } from '@mui/material';

const Spinner = ({ size }) => (
    <Grid container alignItems="center">
        <Grid item container justifyContent="center" xs={12}>
            <CircularProgress size={size} />
        </Grid>
    </Grid>
);

Spinner.propTypes = {
    size: PropTypes.number,
};

export default Spinner;
