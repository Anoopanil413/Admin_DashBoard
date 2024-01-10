import React from 'react'
import { Box, Grid, Typography } from '@mui/material';

const DasBoardStats = ({ text, value }) => {
    return (
        <>
            <Grid style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }} gap={3}>

                <Box sx={{ p: 2, bgcolor: '#f5f5f5', width: '15rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: '12px' }}>
                    <Typography variant="subtitle1" gutterBottom>
                        {text ? text : "Invoice Created"}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        {value ? value : 342}
                    </Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', width: '15rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: '12px' }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Number of Customers
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        971
                    </Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', width: '15rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: '12px' }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Expiring Invoices
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        15
                    </Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', width: '15rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: '12px' }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Expiring Invoices
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        15
                    </Typography>
                </Box>
            </Grid>
        </>
    )
}

export default DasBoardStats