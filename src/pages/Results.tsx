// src/pages/Results.tsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import JobMatchCard from '../components/JobMatchCard';
import DownloadReportButton from '../components/DownloadReportButton';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

interface MatchResult {
  match_score: number;
  recommendations: string[];
  resume_summary: string; 
  job_summary: string;
}

const Results: React.FC = () => {
  const [searchParams] = useSearchParams();
  const resumeId = searchParams.get('resumeId');
  const jobId = searchParams.get('jobId');

  const [matchResult, setMatchResult] = useState<MatchResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatchResult = async () => {
      try {
        // Example: assuming your endpoint returns match_score, recommendations,
        // resume_summary, and job_summary.
        const backendUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get<MatchResult>(`${backendUrl}/match-score/${resumeId}/${jobId}`);
       // console.log('API Response:', response.data);
        setMatchResult(response.data);
      } catch (error) {
        console.error('Error fetching match score:', error);
      } finally {
        setLoading(false);
      }
    };

    if (resumeId && jobId) {
      fetchMatchResult();
    }
  }, [resumeId, jobId]);

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Match Results
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : matchResult ? (
          <>
            <JobMatchCard matchResult={matchResult} />
            <Box mt={2}>
              <DownloadReportButton
                resumeSummary={matchResult.resume_summary}
                jobSummary={matchResult.job_summary}
                matchScore={matchResult.match_score}
                recommendations={matchResult.recommendations}
              />
            </Box>
          </>
        ) : (
          <Typography>No results found. Please try again.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Results;
