import React, { useEffect, useState } from 'react'
import SideNav from '../../layout/SideNav';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './NormalCrud.css'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


const NormalShowCrud = () => {

    const params = useParams();
    const Navigate = useNavigate();
    const [calledData, setcalledData] = useState()

    useEffect(() => {
        getApiData()
    }, [])

    const getApiData = () => {
        axios.get(`https://6405ae28eed195a99f893772.mockapi.io/crud-operation/${params.id}`)
            .then(res => {
                console.log(res.data, "?//")
                setcalledData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Button variant="contained" color="success" onClick={() => Navigate(-1)}>
                        <div className='leftbutton'>
                            <ArrowBackIcon />
                        </div>  Back
                    </Button>
                    <Card style={{ width: "50%" }} className='mt-3'>
                        <CardContent>

                            <div className='d-flex gap-4'>
                                <Typography variant="h5" component="div">
                                    First Name:
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {calledData ? calledData.firstName : "Loading..."}
                                </Typography>
                            </div>

                            <div className='d-flex gap-4 mt-3'>
                                <Typography variant="h5" component="div">
                                    last Name:
                                </Typography>

                                <Typography variant="h6" component="div">
                                    {calledData ? calledData.lastName : "Loading..."}
                                </Typography>
                            </div>

                            <div className='d-flex gap-4 mt-3'>
                                <Typography variant="h5" component="div">
                                    Age:
                                </Typography>

                                <Typography variant="h6" component="div">
                                    {calledData ? calledData.Age : "Loading..."}
                                </Typography>
                            </div>

                            <div className='d-flex gap-4 mt-3'>
                                <Typography variant="h5" component="div">
                                    Phone No.:
                                </Typography>

                                <Typography variant="h6" component="div">
                                    {calledData ? calledData.phone : "Loading..."}
                                </Typography>
                            </div>


                            <div className='d-flex gap-4 mt-3'>
                                <Typography variant="h5" component="div">
                                    Eamil Id:
                                </Typography>

                                <Typography variant="h6" component="div">
                                    {calledData ? calledData.email : "Loading..."}
                                </Typography>
                            </div>


                            <div className='d-flex gap-4 mt-3'>
                                <Typography variant="h5" component="div">
                                    User Name:
                                </Typography>

                                <Typography variant="h6" component="div">
                                    {calledData ? calledData.userList : "Loading..."}
                                </Typography>
                            </div>


                        </CardContent>

                    </Card>

                </Box>
            </Box>

        </>
    )
}

export default NormalShowCrud