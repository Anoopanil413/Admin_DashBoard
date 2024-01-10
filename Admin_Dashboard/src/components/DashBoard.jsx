import React from 'react'
import DashBoardHeader from './DashBoardHeader'
import DasBoardStats from './DasBoardStats'
import DbInvoiceTable from './DbInvoiceTable'
import { Grid } from '@mui/material'
import CustomButton from './CustomButton'
import DateTag from './DateTag'


const DashBoard = () => {
    const heading1 = "Today's Invoice"
    const heading2 = "Today's Paid Invoice"
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <DateTag />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <DashBoardHeader />
                </Grid>
                <Grid item xs={12} md={12} lg={8}>
                    <DasBoardStats />
                </Grid >
                <Grid item xs={12} md={12} lg={12} spacing={4} style={{ marginLeft: '1rem' }}>
                    <CustomButton text="Create Invoice" />
                    <CustomButton text="Add Customer" />

                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                    <DbInvoiceTable heading={heading1} />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <DbInvoiceTable heading={heading2} />
                </Grid>
            </Grid>

        </>
    )
}

export default DashBoard