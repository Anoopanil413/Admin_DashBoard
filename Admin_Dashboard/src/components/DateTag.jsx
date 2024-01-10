import React from 'react'
import { Button, Chip } from '@mui/material';

const tags = ['Today', 'Weekly', 'Monthly'];


const DateTag = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                {tags.map((tag) => (
                    <Chip
                        key={tag}
                        label={tag}
                        style={{
                            backgroundColor: '#FFFF',
                            color: 'black',
                            fontWeight: 'bold',
                            padding: '1px',
                            textAlign: 'center',
                            border: '1px solid #ddd',
                            marginRight: '10px',
                        }}
                        sx={{
                            '&:hover': {
                                backgroundColor: '#3f51b5',
                                color: 'white',
                            },
                            '&:focus': {
                                backgroundColor: '#3f51b5',
                                color: 'white',
                            },
                        }}
                        component={Button}
                    />
                ))}
            </div>
        </>
    )
}

export default DateTag