import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import FileUpload from '../components/FileUpload';

const Upload: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        {/* Beautiful Gradient Header */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC)',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            color: 'white',
            mb: 4,
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Welcome to CareerSync
          </Typography>
        </Box>
        <FileUpload />
      </Box>
    </Container>
  );
};

export default Upload;
