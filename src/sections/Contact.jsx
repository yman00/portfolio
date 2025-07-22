import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = ({ id }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )


    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <Box
      id={id}
      sx={{
        display: 'flex',
        width: '100%',
        height: '80vh',
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'gray',
        px: 2
      }}
    >
      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: {xs:'100%', sm:'60%'},
        }}
      >
      <Box data-aos="fade-up" sx={{display: 'grid',
        placeItems: 'center',
        width: '100%', 
        pt: {xs:'none', sm:'4rem', 
        fontFamily: 'Tekur',
        color: '#d2824a',
        },
        mb: '2rem'}}>
        CONNECT WITH ME
      </Box>
        <TextField
          label="Name"
          name="from_name"
          variant="filled"
          required
            sx={{
              input: { color: 'whitesmoke' },
              label: { color: 'gray' },
              '& .MuiFilledInput-underline:after': {
                borderBottomColor: '#d2824a',
              },
              '& label.Mui-focused': {
                color: '#d2824a',
              },
            }}
        />
        <TextField
          label="Email"
          name="from_email"
          type="email"
          variant="filled"
          required
            sx={{
              input: { color: 'whitesmoke' },
              label: { color: 'gray' },
              '& .MuiFilledInput-underline:after': {
                borderBottomColor: '#d2824a',
              },
              '& label.Mui-focused': {
                color: '#d2824a',
              },
            }}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          variant="outlined"
          required
          sx={{
            label: { color: 'gray' },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#d2824a',
              },
            },
            '& .MuiOutlinedInput-input': {
              color: 'whitesmoke',
            },
            '& label.Mui-focused': {
              color: '#d2824a',
            },
          }}
        />
        <Button type="submit" variant="contained" sx={{ backgroundColor: '#d2824a' }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
