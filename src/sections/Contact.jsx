import React from 'react'
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Typography } from '@mui/material';

const Contact = ({id}) => {
  return (
    <Box id={id} sx={{display: 'flex', width: '100%', height: '14vh', backgroundColor: '#d2824a', justifyContent: 'center', alignItems: 'center', color: 'gray'}}>
    <Box sx={{display: 'flex', gap: "4rem", alignItems: 'center', justifyContent: 'center'}}> 
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <GitHubIcon 
      onClick={() => window.open('https://github.com/yman00', '_blank')}
      sx={{color: '#121212',
        fontSize: {xs:'9vw', sm:'3vw'},
        cursor: 'pointer',
        transition: 'font-size 0.3s ease-in-out',
        '&:hover': {
        fontSize: '3.5vw'
    },
      }}/>
        <Typography variant='h6' sx={{ fontSize: {xs:'1rem', sm:'1.2rem '},fontFamily: 'Tektur', color: '#121212'}}>GitHub</Typography>
    </Box>
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <FacebookRoundedIcon 
      onClick={() => window.open('https://www.facebook.com/WizRems29', '_blank')}
      sx={{color: '#121212',
      fontSize: {xs:'9vw', sm:'3vw'},
      cursor: 'pointer',
      transition: 'font-size 0.3s ease-in-out',
      '&:hover': {
      fontSize: '3.5vw'}
      }}/>
        <Typography variant='h6' sx={{ fontSize: {xs:'1rem', sm:'1.2rem '}, fontFamily: 'Tektur', color: '#121212'}}>Facebook</Typography>
      </Box>
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <EmailRoundedIcon 
      onClick={() => window.open('mailto:ymanmangaring0@gmail.com')}
      sx={{color: '#121212',
      fontSize: {xs:'9vw', sm:'3vw'},
      cursor: 'pointer',
      transition: 'font-size 0.3s ease-in-out',
      '&:hover': {
      fontSize: '3.5vw'}
      }}/>
        <Typography variant='h6' sx={{ fontSize: {xs:'1rem', sm:'1.2rem '}, fontFamily: 'Tektur', color: '#121212'}}>Email</Typography>
      </Box>
    </Box>
    </Box>
  )
}

export default Contact