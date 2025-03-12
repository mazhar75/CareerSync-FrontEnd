// src/components/FileUpload.tsx

import React, { useState } from 'react';
import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Divider,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FileUpload: React.FC = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDescMode, setJobDescMode] = useState<'upload' | 'paste'>('upload');
  const [jobDescFile, setJobDescFile] = useState<File | null>(null);
  const [jobDescText, setJobDescText] = useState<string>('');
  const navigate = useNavigate();

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'resume' | 'jobDesc'
  ) => {
    if (e.target.files && e.target.files[0]) {
      if (type === 'resume') {
        setResume(e.target.files[0]);
      } else {
        setJobDescFile(e.target.files[0]);
      }
    }
  };

  const handleJobDescModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mode = e.target.value as 'upload' | 'paste';
    setJobDescMode(mode);
  };

  const handleSubmit = async () => {
    if (!resume) {
      //console.log("i am here");
      alert('Please select your resume file.');
      return;
    }
    if (jobDescMode === 'upload' && !jobDescFile) {
      alert('Please select a job description file.');
      return;
    }
    if (jobDescMode === 'paste' && !jobDescText.trim()) {
      alert('Please enter the job description text.');
      return;
    }
    
    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('jobDescMode', jobDescMode);
    if (jobDescMode === 'upload') {
      formData.append('jobDesc', jobDescFile!);
    } else {
      formData.append('jobDescText', jobDescText);
    }
    
    
    try {
      const backendUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.post(`${backendUrl}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Upload success:', response.data);
      const { resumeId, jobId } = response.data;
      navigate(`/results?resumeId=${resumeId}&jobId=${jobId}`);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 600,
        margin: '0 auto',
        mt: 4,
        boxShadow: 3,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {/* Gradient Blue Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC)', // Gradient blue background
          padding: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" color="white" fontWeight="bold">
          Upload Your Documents
        </Typography>
      </Box>
      <Divider />
      <CardContent>
        <Box display="flex" flexDirection="column" gap={3}>
          {/* Resume File Input */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Resume (PDF or DOCX)
            </Typography>
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => handleFileChange(e, 'resume')}
              style={{ width: '100%', padding: '6px 0' }}
            />
          </Box>

          {/* Job Description Mode Selector */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Job Description
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                row
                value={jobDescMode}
                onChange={handleJobDescModeChange}
              >
                <FormControlLabel
                  value="upload"
                  control={<Radio />}
                  label="Upload File"
                />
                <FormControlLabel
                  value="paste"
                  control={<Radio />}
                  label="Paste Text"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          {/* Conditional rendering for file upload or text area */}
          {jobDescMode === 'upload' ? (
            <Box>
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={(e) => handleFileChange(e, 'jobDesc')}
                style={{ width: '100%', padding: '6px 0' }}
              />
            </Box>
          ) : (
            <TextField
              label="Job Description"
              multiline
              rows={6}
              variant="outlined"
              value={jobDescText}
              onChange={(e) => setJobDescText(e.target.value)}
              placeholder="Paste the job description here..."
              fullWidth
            />
          )}

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            size="large"
          >
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FileUpload;
