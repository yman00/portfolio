import React from 'react'
import Box from '@mui/material/Box';

const Project = ({id}) => {
  return (
    <Box id={id} sx={{display: 'block',
      width: '100%',
      height: '150vh',
      backgroundColor: '#121212',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'gray',
      }}>
      <Box data-aos="fade-up" sx={{display: 'grid',
        placeItems: 'center',
        width: '100%', 
        pt: {xs:'none', sm:'4rem', 
        fontFamily: 'Tekur',
        color: '#d2824a',
        },
        mb: '2rem'}}>
        PROJECTS
      </Box>
      <Box data-aos="fade-left" sx={{  
        display: 'flex',    
        width: '100%',
        justifyContent: 'center',
        gap: 2,
        mb: '1rem'}}>
     <Box sx={{display: 'flex', backgroundColor: 'beige', width: '40%', height: '20rem'}}>
    <h1>PROJECT</h1>
     </Box>
     <Box sx={{display: 'flex', backgroundColor: 'beige', width: '50rem', height: '20rem'}}>
    <h1>PROJECT</h1>
     </Box>
     </Box>
      <Box data-aos="fade-right" sx={{  
        display: 'flex',    
        width: '100%',
        justifyContent: 'center',
        gap: 2}}>
     <Box sx={{display: 'flex', backgroundColor: 'beige', width: '50rem', height: '20rem'}}>
    <h1>PROJECT</h1>
     </Box>
     <Box sx={{display: 'flex', backgroundColor: 'beige', width: '40%', height: '20rem'}}>
    <h1>PROJECT</h1>
     </Box>
     </Box>
    </Box>
  )
}

export default Project