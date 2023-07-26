import React from 'react';
import Page from '../../components/Page';
import { Box, Button, Typography } from '@mui/material';

export default function Gridcontent() {
  return (
    <Page>
        <Box>
            <img src='./images/building.jpeg' alt='00' />   
            <Typography variant='h5'>Architecure Details</Typography>   
            <Typography variant='body2'>
                This section conatains article related to architecture design parameters standard and architecture for designing ...
            </Typography>  
            <Button variant='contained'>Read More</Button>
        </Box>
    </Page>
  )
}
