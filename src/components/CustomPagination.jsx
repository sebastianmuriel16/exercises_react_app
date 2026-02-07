import { Button, Box, Typography } from '@mui/material';

const CustomPagination = ({ currentPage, nextPageHandler, prevPageHandler, hasNext, hasPrevious }) => {


    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Button
                variant="contained"
                sx={{
                    background: hasPrevious ? "#3a3a3a" : "#e0e0e0",
                    color: "#fff",
                    textTransform: "capitalize",
                    borderRadius: "50px",
                    px: 4
                }}
                disabled={!hasPrevious}
                onClick={prevPageHandler}
            >
                Previous
            </Button>

            <Typography variant="h6">Page {currentPage}</Typography>

            <Button
                variant="contained"
                sx={{
                    background: "#FF2625", // Rojo oficial
                    color: "#fff",
                    textTransform: "capitalize",
                    borderRadius: "50px",
                    px: 4
                }}
                disabled={!hasNext}
                onClick={nextPageHandler}
            >
                Next
            </Button>
        </Box>
    );
};

export { CustomPagination };