import React from 'react';
import SideNav from '../layout/SideNav';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const WellCome = () => {

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));


    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" >
                    <DrawerHeader />
                    asas
                </Box>
            </Box>
        </>
    )
}

export default WellCome