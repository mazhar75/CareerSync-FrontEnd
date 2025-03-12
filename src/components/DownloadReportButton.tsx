// src/components/DownloadReportButton.tsx
import React from 'react';
import { Button } from '@mui/material';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

interface DownloadReportButtonProps {
  resumeSummary: string;
  jobSummary: string;
  matchScore: number;
  recommendations: string[];
}

const DownloadReportButton: React.FC<DownloadReportButtonProps> = ({
  resumeSummary,
  jobSummary,
  matchScore,
  recommendations,
}) => {
  const handleDownload = () => {
    const doc = new jsPDF();

    const maxWidth = 180;
    const lineSpacing = 8;
    let yPos = 22;

    // Title
    doc.setFontSize(18);
    doc.text('CareerSync Report', 14, yPos);

    // Resume Summary
    yPos += 12;
    doc.setFontSize(12);
    doc.text('Resume Summary:', 14, yPos);
    yPos += lineSpacing;

    const resumeLines = doc.splitTextToSize(resumeSummary || 'N/A', maxWidth);
    doc.text(resumeLines, 14, yPos);
    yPos += resumeLines.length * lineSpacing;

    // Job Summary
    yPos += 4; // extra spacing between sections
    doc.text('Job Summary:', 14, yPos);
    yPos += lineSpacing;

    const jobLines = doc.splitTextToSize(jobSummary || 'N/A', maxWidth);
    doc.text(jobLines, 14, yPos);
    yPos += jobLines.length * lineSpacing;

    // Match Score
    yPos += 4; // extra spacing between sections
    doc.text(`Match Score: ${matchScore}%`, 14, yPos);

    // Recommendations
    yPos += lineSpacing * 2;
    doc.text('Recommendations:', 14, yPos);
    yPos += lineSpacing;

    if (recommendations && recommendations.length > 0) {
      recommendations.forEach((rec) => {
        const recLines = doc.splitTextToSize(`- ${rec}`, maxWidth);
        doc.text(recLines, 14, yPos);
        yPos += recLines.length * lineSpacing;
      });
    } else {
      doc.text('No recommendations available.', 14, yPos);
    }

    // Save the PDF
    doc.save('CareerSync_Report.pdf');
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownload}
      sx={{
        backgroundColor: 'purple',
        color: 'white',
        '&:hover': {
          backgroundColor: '#6a0dad',
        },
      }}
    >
      Download Report
    </Button>
  );
};

export default DownloadReportButton;
