import React, { useEffect, useState } from 'react'
import SideNav from '../../layout/SideNav';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));
const NormalCrud = () => {

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [Age, setage] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [userList, setuserList] = useState('');
    const [userName, setUserName] = useState([]);
    const [userApiData, setuserApiData] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault()

        if (firstName === "" || firstName === null || firstName.length < 3) {
            toast.error('Please fill First Name Proper', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        if (lastName === "" || lastName === null || lastName.length < 3) {
            toast.error('Please fill Last Name Proper', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        if (Age === "" || Age === null) {
            toast.error('Please fill Age', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        if (phone === "" || phone === null) {
            toast.error('Please fill Phone', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        if (email === "" || email === null) {
            toast.error('Please fill Email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        if (userList === "" || userList === null) {
            toast.error('Please fill UserName', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        else {
            let data = { firstName, lastName, Age, phone, email, userList }


            axios.post(`https://6405ae28eed195a99f893772.mockapi.io/crud-operation`, data)
                .then(res => {
                    console.log(res);
                    setfirstName('');
                    setlastName('');
                    setage('');
                    setphone('');
                    setemail('');
                    setuserList('');
                    getApiData();
                    toast.success('SucessFully Submitted!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });

                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    useEffect(() => {
        getUserData();
        getApiData();
    }, [])

    const getUserData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res.data, '??')
                setUserName(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getApiData = () => {
        axios.get(`https://6405ae28eed195a99f893772.mockapi.io/crud-operation`)
            .then(res => {
                console.log(res.data, "?//")
                setuserApiData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDelete = (id) => {
        axios.delete(`https://6405ae28eed195a99f893772.mockapi.io/crud-operation/${id}`)
            .then(res => {
                console.log(res)
                getApiData();
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1}}>
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
                                        <input value={Age} onChange={(e) => setage(e.target.value)} type="number" className='form-control' />
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <label htmlFor="">Phone</label>
                                        <input value={phone} onChange={(e) => setphone(e.target.value)} type="number" className='form-control' />
                                    </Grid>

                                    <Grid item xs={12} lg={6}>
                                        <label htmlFor="">Email</label>
                                        <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className='form-control' />
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
                                        <Button variant="contained" color="success" type="submit">
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </form>

                        <TableContainer component={Paper} className='mt-3'>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell >No.</TableCell>
                                        <TableCell >First Name</TableCell>
                                        <TableCell>Last Name</TableCell>
                                        <TableCell>Age</TableCell>
                                        <TableCell>Phone</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Selected User</TableCell>
                                        <TableCell>Action</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {userApiData.map((row, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell >{row.firstName}</TableCell>
                                            <TableCell >{row.lastName}</TableCell>
                                            <TableCell >{row.Age}</TableCell>
                                            <TableCell >{row.phone}</TableCell>
                                            <TableCell >{row.email}</TableCell>
                                            <TableCell >{row.userList}</TableCell>
                                            <TableCell className='gap-3 d-flex'>
                                                <Link to={'/Normal-Crud-Show/' + row.id}> <Button variant="contained" color="success">Show</Button></Link>
                                                <Button onClick={() => handleDelete(row.id)} variant="contained" color="error">Delete</Button>
                                                <Link to={'/Normal-Crud-Update/' + row.id}> <Button variant="contained" color="secondary">Update</Button></Link>
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>
                </Box>
            </Box>
        </>
    )
}

export default NormalCrud