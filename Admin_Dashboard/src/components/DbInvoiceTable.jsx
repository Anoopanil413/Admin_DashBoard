import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const data = [
    {
        paymentRef: "PR-001",
        invoiceValue: 1000,
        commission: 100,
        transactionId: "TX-001"
    },
    {
        paymentRef: "PR-002",
        invoiceValue: 2000,
        commission: 200,
        transactionId: "TX-002"
    },];

const DbInvoiceTable = ({ heading }) => {
    return (
        <>
            <TableContainer component={Paper} sx={{ margin: 2, padding: 2 }} style={{ maxWidth: '380px' }}>
                <Typography style={{ color: '#2EA6E5', fontWeight: '800' }}>{heading}</Typography>
                <Table sx={{ maxWidth: 300 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Payment Ref.</TableCell>
                            <TableCell align="right">Invoice Value</TableCell>
                            {heading === "Today's Invoice" ?
                                (
                                    <>

                                        <TableCell align="right">Commission</TableCell>
                                        <TableCell align="right">Transaction ID</TableCell>
                                    </>
                                )
                                :
                                (<TableCell align="right">Invoice Status</TableCell>
                                )
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.paymentRef}>
                                <TableCell component="th" scope="row">
                                    {row.paymentRef}
                                </TableCell>
                                <TableCell align="right">{row.invoiceValue}</TableCell>
                                {heading === "Today's Invoice" ?
                                    (<>

                                        <TableCell align="right">{row.commission}</TableCell>
                                        <TableCell align="right">{row.transactionId}</TableCell>
                                    </>) :
                                    (
                                        <TableCell align="right">Pending</TableCell>

                                    )
                                }

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default DbInvoiceTable