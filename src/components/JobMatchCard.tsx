// src/components/JobMatchCard.tsx
import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

interface RecommendationObject {
  matchPercentage?: number;
  suggestions?: string[];
  strengths?: string[];
  motivation?: string;
  positiveClosing?: string;
  motivationalMessage?: string;
}

interface MatchResult {
  match_score: number;
  // recommendations can be either an array of strings or an object
  recommendations?: string[] | RecommendationObject;
}

interface JobMatchCardProps {
  matchResult: MatchResult;
}

const JobMatchCard: React.FC<JobMatchCardProps> = ({ matchResult }) => {
  const { match_score, recommendations } = matchResult;

  // If recommendations is an array with a single object, treat it as an object.
  let recObj: RecommendationObject | null = null;
  if (recommendations) {
    if (Array.isArray(recommendations)) {
      if (
        recommendations.length === 1 &&
        recommendations[0] !== null &&
        typeof recommendations[0] === 'object'
      ) {
        recObj = recommendations[0] as RecommendationObject;
      } else {
        // Otherwise, if it's an array of strings, join them
        recObj = { motivationalMessage: recommendations.join(', ') };
      }
    } else if (typeof recommendations === 'object') {
      recObj = recommendations as RecommendationObject;
    }
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Match Score: {match_score}%
        </Typography>
        <Typography variant="h6">Recommendations:</Typography>
        {recObj ? (
          <div>
            {recObj.matchPercentage !== undefined && (
              <Typography variant="subtitle1">
                Match Percentage: {recObj.matchPercentage}%
              </Typography>
            )}
            {recObj.suggestions && recObj.suggestions.length > 0 && (
              <>
                <Typography variant="subtitle1">Improvement Suggestions:</Typography>
                <List>
                  {recObj.suggestions.map((suggestion, index) => (
                    <ListItem key={index}>{suggestion}</ListItem>
                  ))}
                </List>
              </>
            )}
            {recObj.strengths && recObj.strengths.length > 0 && (
              <>
                <Typography variant="subtitle1">Strengths:</Typography>
                <List>
                  {recObj.strengths.map((strength, index) => (
                    <ListItem key={index}>{strength}</ListItem>
                  ))}
                </List>
              </>
            )}
            {recObj.motivation && (
              <Typography variant="body1">
                Motivation: {recObj.motivation}
              </Typography>
            )}
            {recObj.positiveClosing && (
              <Typography variant="body1">
                Positive Closing: {recObj.positiveClosing}
              </Typography>
            )}
            {recObj.motivationalMessage && (
              <Typography variant="body1" color="primary">
                {recObj.motivationalMessage}
              </Typography>
            )}
          </div>
        ) : (
          <Typography>No recommendations available.</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default JobMatchCard;
