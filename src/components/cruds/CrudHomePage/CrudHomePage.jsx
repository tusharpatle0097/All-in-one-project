import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SideNav from '../../layout/SideNav';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'

const CrudHomePage = () => {

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

    const data = [
        {
            title: "Normal Crud Operation",
            details: "Create Using Moke api"
        },

    ]

    const Navigate = useNavigate()
    return (
        <div>

            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Grid container spacing={2}>
                        {
                            data.map((items) => {
                                return (
                                    <Grid item xs={12} lg={3}>
                                        <Card sx={{ minWidth: 275 }}>
                                            <CardContent>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    {items.details}
                                                </Typography>
                                                <Typography variant="h5" component="div">
                                                    {items.title}
                                                </Typography>

                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" onClick={() => Navigate('/NormalCrud')}>Show</Button>
                                            </CardActions>
                                        </Card>

                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default CrudHomePage