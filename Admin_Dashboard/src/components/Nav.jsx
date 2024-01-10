import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Container, Button } from '@mui/material';
import SegmentIcon from '@mui/icons-material/Segment';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import './nav.css'


const Nav = () => {
    return (
        <>
            <Drawer container={Container} variant="permanent" anchor="left" >
                <List style={{ width: '300px' }} >
                    <ListItem style={{ marginBottom: '40px', marginRight: '20px', borderBottom: 'solid black 2', borderRight: 'solid black 2', height: '57px', boxShadow: ' 2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Logo" />
                    </ListItem>
                    <ListItem button style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        <ListItemIcon>
                            <SegmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Customers" />
                    </ListItem>
                    <ListItem button style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        <ListItemIcon>
                            <PeopleAltTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItem>
                    <ListItem button style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        <ListItemIcon>
                            <FileCopyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Invoice" />
                    </ListItem>
                </List>
                <div style={{ display: 'flex', justifyContent: 'center', bottom: '30px', marginTop: '80%' }}>

                    <Button style={{ backgroundColor: '#2EA6E5', color: '#FFFF', paddingRight: '25px', paddingLeft: '25px', borderRadius: '10px' }}>
                        Log Out
                    </Button>
                </div>
            </Drawer>
        </>
    )
}

export default Nav