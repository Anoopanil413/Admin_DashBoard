import React from 'react'
import { Paper, Typography } from '@mui/material';


const DashBoardHeader = () => {
    return (
        <>
            <Paper sx={{ p: 2, bgcolor: '#1976d2', color: 'white', marginLeft: '25px', borderRadius: '10px', height: '16rem' }}>
                <Typography variant="subtitle1" gutterBottom>
                    Number of Paid Invoices
                </Typography>
                <Typography variant="h4" gutterBottom>
                    324
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Value of Paid Invoices:
                </Typography>
                <Typography variant="h4" gutterBottom>
                    $2705.96
                </Typography>
            </Paper>
        </>
    )
}

export default DashBoardHeader