import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const CardWrapper = ({ cardData }) => {
    const card = (
        <>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {cardData.name}
                </Typography>
            </CardContent>
        </>
    );

    return (
        <Grid item xs={12} md={4}>
            <Card variant="outlined">{card}</Card>
        </Grid>
    );
};

CardWrapper.propTypes = {
    cardData: PropTypes.object,
};

export default CardWrapper;
