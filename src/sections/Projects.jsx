import React from 'react'
import Box from '@mui/material/Box';

const Project = ({id}) => {
  return (
    <Box id={id} sx={{display: 'block',
      width: '100%',
      // height: {xs: '220vh', sm: '120vh'},
      backgroundColor: '#121212',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'gray',
      py: '1rem',
      overflow: 'hidden'
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
        mb: '1rem',
        flexWrap: 'Wrap'}}>
     <Box sx={{display: 'flex', backgroundColor: 'beige', width: {xs: '90vw', sm: '35vw'}, height: '20rem'}}>
    <h1>PROJECT</h1>
     </Box>
     <Box sx={{display: 'flex', backgroundColor: 'beige', width: {xs: '90vw', sm: '45vw'}, height: '20rem'}}>
    <h1>PROJECT</h1>
     </Box>
     </Box>
      <Box data-aos="fade-right" sx={{  
        display: 'flex',    
        width: '100%',
        justifyContent: 'center',
        gap: 2,
        flexWrap: 'Wrap'}}>
     <Box sx={{display: 'flex', backgroundColor: 'beige', width: {xs: '90vw', sm: '45vw'}, height: '20rem'}}>
    <h1>PROJECT</h1>
     </Box>
     <Box sx={{display: 'flex', backgroundColor: 'beige', width: {xs: '90vw', sm: '35vw'}, height: '20rem'}}>
    <h1>PROJECT</h1>
     </Box>
     </Box>
    </Box>
  )
}

export default Project