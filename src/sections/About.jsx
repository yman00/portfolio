import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import pic1 from '../assets/image/pic1.JPG';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = ({id}) => {
    useEffect(() => {
    AOS.init({ duration: 500 }); // Initialize AOS here
  }, []);

  const style = {color: '#d2824a',
      fontSize: {xs:'9vw', sm:'2vw'},
      cursor: 'pointer',
      transition: 'font-size 0.3s ease-in-out',
      '&:hover': {
      fontSize: '3.5vw'}
      }

  return (
    <Box id={id} 
    sx={{display: 'flex', 
        // width: '100%', 
        // height: {xs:'150vh', sm:'100vh'}, 
        backgroundColor: '#121212', 
        justifyContent: 'space-evenly', 
        color: 'gray',
        flexDirection: {xs: 'column', sm: 'row'}
        }}>
      <Box sx={{display: 'flex', flexDirection: 'column', width: {xs: '100vw', sm: '40vw'},pt: {xs:'5rem', sm:'none'}, justifyContent: 'center', alignItems: 'center'}}>
        <Stack data-aos="fade-right" sx={{width: '100%', gap: 1, px: '2rem'}}>
          <Typography variant='h5'>Hi there!</Typography>
          <Typography variant='h3' sx={{fontFamily: 'Tektur', color: '#d2824a'}}>YMAN SORIANO MANGARING</Typography>
          <Typography variant='body2' sx={{ textAlign: 'justify'}}>
            Bachelor of Science in Information Technology graduate with a strong passion 
            for technology and a foundation in system development and data analytics. 
            Possess one year of hands-on experience in building and maintaining web-based 
            applications, supporting government operations through efficient system 
            implementations. with a focus on improving efficiency and user experience. 
            Seeking an opportunity to apply my skills in creating innovative online solutions 
            and contributing to a dynamic, growth-oriented team.
          </Typography>
          <Box sx={{display: 'flex', width: '100%', height: '4rem', gap: 2, p: '1rem' }}>
            <GitHubIcon
            onClick={() => window.open('https://github.com/yman00', '_blank')}
            sx={style}/>
            <FacebookRoundedIcon 
            onClick={() => window.open('https://www.facebook.com/WizRems29', '_blank')} 
            sx={style}/>
            <EmailRoundedIcon 
            onClick={() => window.open('mailto:ymanmangaring0@gmail.com')} 
            sx={style}/>
            <LinkedInIcon 
            onClick={() => window.open('https://www.linkedin.com/in/mangaring-yman/', '_blank')} 
            sx={style}/>
          </Box>
        </Stack>
      </Box>
      <Box sx={{display: 'flex', width: {xs:'100vw', sm:'32vw'}, height: '90vh', justifyContent: 'center', alignItems: 'center'}}>
          <img src={pic1} alt="Yman Purdy" data-aos="fade-up" style={{ width: '90%', height: '90%', objectFit: 'cover',borderRadius: '2rem'}} />
      </Box>
    </Box>
  )
}

export default About