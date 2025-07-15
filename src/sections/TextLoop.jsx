import { Box } from '@mui/material';
import React from 'react';
import CurvedLoop from '../Components/ReactBits/CurvedLoop';

const TextLoop = () => {
  return (
    <Box sx={{ backgroundColor: '#121212', height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CurvedLoop 
        marqueeText="Frontend ✦ Backend ✦ Database ✦ Automation ✦ Web Site ✦ Analytics ✦"
        speed={1}
        curveAmount={10}
        direction="right"
        interactive={false}
        className="custom-text-style"
        color="#d2824a"
      />
    </Box>
  );
};

export default TextLoop;
