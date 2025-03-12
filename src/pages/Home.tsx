import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/upload');
  };

  return (
    <Box 
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?technology,office)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <Box 
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: 2,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ color: '#fff', fontWeight: 'bold' }}
          >
            CareerSync
            
          </Typography>
          <Typography 
            variant="h5" 
            gutterBottom 
            sx={{ color: '#fff' }}
          >
            Synchronizing resumes with job requirements seamlessly.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            onClick={handleGetStarted} 
            sx={{ 
              mt: 4, 
              backgroundColor: '#6FA3EF', // Soft blue
              color: 'white',
              '&:hover': { backgroundColor: '#5A92D6' } // Slightly darker on hover
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
