import React, { useEffect, useState } from 'react'
import SideNav from '../../layout/SideNav';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));
const NormalCrudUpdate = () => {

    const params = useParams()
    const Navigate = useNavigate()

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [Age, setage] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [userList, setuserList] = useState('');
    const [userName, setUserName] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault()
        let data = { firstName, lastName, Age, phone, email, userList }
        axios.put(`https://6405ae28eed195a99f893772.mockapi.io/crud-operation/${params.id}`, data)
            .then(res => {
                console.log(res);
                setfirstName('');
                setlastName('');
                setage('');
                setphone('');
                setemail('');
                setuserList('');

            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getUserData();
        getApiData();
    }, [])
    const getUserData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res.data, '??ssas')
                setUserName(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const getApiData = () => {
        axios.get(`https://6405ae28eed195a99f893772.mockapi.io/crud-operation/${params.id}`)
            .then(res => {
                console.log(res.data, "?//")
                // setuserApiData(res.data)
                setfirstName(res.data.firstName)
                setlastName(res.data.lastName)
                setage(res.data.Age)
                setphone(res.data.phone)
                setemail(res.data.email)
                setuserList(res.data.userList)
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

                    <h3 className='text-center mt-3 mb-3'>Normal Crud Operation</h3>
                    <div className="container">
                        <form action="" onSubmit={handleSubmit}>

                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} lg={6}>
                                        <label htmlFor="">First Name</label>
                                        <input value={firstName} onChange={(e) => setfirstName(e.target.value)} type="text" className='form-control' />
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <label htmlFor="">Last Name</label>
                                        <input value={lastName} onChange={(e) => setlastName(e.target.value)} type="text" className='form-control' />
                                    </Grid>

                                    <Grid item xs={12} lg={6}>
                                        <label htmlFor="">Age</label>
                                        <input value={Age} onChange={(e) => setage(e.target.value)} type="text" className='form-control' />
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <label htmlFor="">Phone</label>
                                        <input value={phone} onChange={(e) => setphone(e.target.value)} type="text" className='form-control' />
                                    </Grid>

                                    <Grid item xs={12} lg={6}>
                                        <label htmlFor="">Email</label>
                                        <input value={email} onChange={(e) => setemail(e.target.value)} type="text" className='form-control' />
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <label htmlFor="">Select User</label>
                                        <select onChange={(e) => setuserList(e.target.value)} value={userList} className="form-select" required>
                                            <option>Open this select menu</option>
                                            {
                                                userName.map((item, k) => {
                                                    // console.log(item, "///")
                                                    return (
                                                        <option key={k} >{item.name}</option>
                                                    )
                                                })
                                            }

                                        </select>
                                    </Grid>
                                    <Grid item xs={12} lg={3}>
                                        <Button variant="contained" color="success" type="submit" onClick={() => Navigate(-1)}>
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </form>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default NormalCrudUpdate