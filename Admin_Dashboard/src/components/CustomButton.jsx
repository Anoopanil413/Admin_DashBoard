import React from 'react'
import { Button, Box, Icon } from '@mui/material';
import { Add, Create } from '@mui/icons-material';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';

const CustomButton = ({ text }) => {
    return (
        <>
            <Button variant="contained" color="primary" sx={{ margin: 1, padding: '20px' }}>
                {text === "Add Customer" ? <Icon>
                    <PeopleAltTwoToneIcon />
                </Icon> :
                    <Icon>
                        <InsertDriveFileTwoToneIcon />
                    </Icon>}
                {text}
            </Button>
        </>
    )
}

export default CustomButton