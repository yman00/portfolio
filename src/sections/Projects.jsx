import React from 'react'
import Box from '@mui/material/Box';
import TrikeFranc from '../assets/image/Projects-Img/TFload.png'
import QM from '../assets/image/Projects-Img/QM1.png'
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
      <Box data-aos="fade-right" sx={{  
        display: 'flex',    
        justifyContent: 'center',
        flexWrap: 'Wrap'}}>
     <Box
      sx={{display: 'flex',
        backgroundColor: 'beige',
        width: {xs: '90vw', sm: '40vw'}, 
        height: {xs: '12rem', sm: '20rem'}}}>
        <img src={TrikeFranc} alt='TF' style={{ width: '100%', height: '100%', position: 'cover'}}/>
      </Box>
     <Box
     sx={{display: 'flex',
      backgroundColor: '#2e2e2e6d',
      width: {xs: '90vw', sm: '40vw'}, 
      height: {xs: 'none', sm: '20rem'}, 
      flexDirection: 'column', 
      justifyContent: 'center', p: 3,}}>
      <Typography variant='h5' style={{textAlign: 'center', color: '#d2824a', fontFamily: 'Tekur'}}>
        TRICYCLE FRANCHISING AND RENEWAL SYSTEM
      </Typography>
      <br />
      <Typography variant='body1' style={{textAlign: 'center' }}>
          Participated in the development of an in-house
          Tricycle Franchising and Renewal System for a
          local government unit, enhancing operational
          workflows by automating application processing,
          streamlining document verification, and improving
          tracking and reporting capabilities."
      </Typography>
     </Box>
     </Box>
     <br />
     <br />
      <Box data-aos="fade-left" sx={{  
        display: 'flex',    
        width: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap-reverse'}}>
     <Box
      sx={{display: 'flex',
        backgroundColor: '#2e2e2e6d',
        width: {xs: '90vw', sm: '40vw'},
        height: {xs: 'none', sm: '20rem'}, 
        flexDirection: 'column', 
        justifyContent: 'center',
        p: 3,}}>
      <Typography variant='h5' style={{textAlign: 'center', color: '#d2824a', fontFamily: 'Tekur'}}>
        REAL PROPERTY TAX INFORMATION SYSTEM
      </Typography>
      <br />
      <Typography variant='body1' style={{textAlign: 'center'}}>
        Participated in the development of an in-house Real
        Property Tax Information System for a local government
        unit, enhancing operational workflows by automating
        tax computation, streamlining billing and payment
        processing, and improving data accuracy and accessibility
        for both staff and constituents.
      </Typography>
     </Box>
     <Box
     sx={{display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d2824a', 
      width: {xs: '90vw', sm: '40vw'},
      height: {xs: '12rem', sm: '20rem'}}}>
      {/* <img src={QM} alt='TF' style={{ position: 'cover'}}/> */}
      <Typography variant='h6' sx={{fontFamily: 'Tekur',color:'#121212'}}>No Media Available</Typography>
     </Box>
     </Box>
    </Box>
  )
}

export default Project