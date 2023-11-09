import React, { useState,useContext } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SideNav from '../../layout/SideNav';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { DarkModeContext } from '../../context/DarkModeStore';
import './NormalTransCompiler'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));


const NormalTransCompiler = () => {

  const [textChange, settextChange] = useState()
  const handleUpperCase = () => {
    settextChange(textChange.toUpperCase())
  }
  const handleLowerCase = () => {
    settextChange(textChange.toLowerCase())
  }
  const handleRemove = () => {
    settextChange('')
  }
  const handleCopy = () => {
    var copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }

  const { isDarkMode } = useContext(DarkModeContext);


  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <DrawerHeader />
          <div className="container">
            <h3 className='text-center mt-3'>Transcompiler</h3>
            <textarea  value={textChange} id="myInput" onChange={(e) => settextChange(e.target.value)} name="" cols="20" rows="10" style={{ width: "100%",background:`${isDarkMode?"#2f2a2a":"white"}`,color:`${isDarkMode?"White":"black"}`,fontSize:"25px"}}></textarea>

            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="success" onClick={handleUpperCase}>
                Upper Case
              </Button>
              <Button variant="contained" color="success" onClick={handleLowerCase}>
                Lower Case
              </Button>
              <Button variant="contained" color="success" onClick={handleRemove}>
                Clear
              </Button>
              <Button variant="contained" color="success" onClick={handleCopy}>
                copy
              </Button>
            </Stack>
          </div>
        </Box>
      </Box>

    </>
  )
}

export default NormalTransCompiler