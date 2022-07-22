export const movieItemStyles = {
    title: {
        '&:hover': {
            color: 'primary.main',
            cursor: 'pointer',
        },
    },
    wrapper: { boxShadow: 4, p: 4, borderRadius: 4 },
    content: { my: 3, mx: 2 },
    details: { m: 2 },
};

export const movieModalStyles = {
    wrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
    summary: { mt: 2 },
};
