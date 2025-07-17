import React from 'react'
import Box from '@mui/material/Box';
import TrikeFranc from '../assets/image/Projects-Img/TFdashboard.png'
import Typography from '@mui/material/Typography';

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
     <Box sx={{display: 'flex', backgroundColor: 'beige', width: {xs: '90vw', sm: '40vw'}, height: '20rem'}}>
    <img src={TrikeFranc} alt='TF' style={{ width: '100%', height: '100%', position: 'cover'}}/>
     </Box>
     <Box sx={{display: 'flex', backgroundColor: '#121212', width: {xs: '90vw', sm: '40vw'}, height: {xs: 'none', sm: '20rem'}, flexDirection: 'column', justifyContent: 'center'}}>
      <Typography variant='h5' style={{textAlign: 'center', color: '#d2824a', fontFamily: 'Tekur'}}>
        TRICYCLE FRANCHISING AND RENEWAL SYSTEM
      </Typography>
      <br />
      <Typography variant='body1' style={{textAlign: 'center' }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Delectus officiis nulla ea tenetur rerum at numquam laboriosam, 
        quibusdam doloremque? Cum veniam eius laborum eos, 
        autem quos tempora. Culpa, harum voluptatum?
      </Typography>
     </Box>
     </Box>
     <br />
      <Box data-aos="fade-right" sx={{  
        display: 'flex',    
        width: '100%',
        justifyContent: 'center',
        gap: 2,
        mb: '1rem',
        flexWrap: 'wrap-reverse'}}>
     <Box sx={{display: 'flex', backgroundColor: '#121212', width: {xs: '90vw', sm: '40vw'}, height: {xs: 'none', sm: '20rem'}, flexDirection: 'column', justifyContent: 'center'}}>
      <Typography variant='h5' style={{textAlign: 'center', color: '#d2824a', fontFamily: 'Tekur'}}>
        REAL PROPERTY TAX INFORMATION SYSTEM
      </Typography>
      <br />
      <Typography variant='body1' style={{textAlign: 'center'}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Delectus officiis nulla ea tenetur rerum at numquam laboriosam, 
        quibusdam doloremque? Cum veniam eius laborum eos, 
        autem quos tempora. Culpa, harum voluptatum?
      </Typography>
     </Box>
     <Box sx={{display: 'flex', backgroundColor: 'beige', width: {xs: '90vw', sm: '40vw'}, height: '20rem'}}>
    <img src={TrikeFranc} alt='TF' style={{ width: '100%', height: '100%', position: 'cover'}}/>
     </Box>
     </Box>
    </Box>
  )
}

export default Project