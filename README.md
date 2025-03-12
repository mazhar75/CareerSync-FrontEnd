# CareerSync AI Platform

**CareerSync** is an intelligent job-resume matching system designed to bridge the gap between job seekers and employers. By analyzing resumes and job descriptions through advanced NLP techniques, the system calculates a match score and generates personalized recommendations for improving resumes.

## Live Demo

- **Live Frontend:** [CareerSync Live](https://career-sync-murex.vercel.app/)

## Overview

CareerSync streamlines the recruitment process by:
- Summarizing lengthy resumes and job descriptions.
- Converting texts into high-dimensional vectors using state-of-the-art NLP models.
- Calculating semantic similarity between candidates and job descriptions.
- Combining rule-based skill extraction with AI-based analysis to generate actionable recommendations.
- Providing a downloadable PDF report that summarizes the analysis.

## Technology Stack

### Frontend
- **React & TypeScript:** For building a modular and dynamic user interface.
- **Modular CSS & Tailwind CSS:** For scoped styling and responsiveness.
- **React Router:** For smooth navigation between pages.
- **Vercel:** For fast and scalable deployment.

### Backend
- **Node.js & Express.js:** For building the RESTful API that processes resumes and job descriptions.
- **MongoDB:** For storing resumes, job descriptions, match scores, and recommendations.
- **Axios:** For making API requests (including those to Hugging Face).
- **Hugging Face Inference API:** 
  - **facebook/bart-large-cnn:** Summarizes lengthy texts.
  - **sentence-transformers/all-MiniLM-L6-v2:** Converts texts into vectors and calculates cosine similarity.
- **Hybrid Recommendation Engine:** Combines rule-based skill and requirement extraction with semantic similarity for personalized recommendations.

### AI Processing & Recommendation
- **Text Summarization:** The backend uses the `facebook/bart-large-cnn` model to condense resumes and job descriptions, filtering out unnecessary details.
- **Vectorization & Similarity:** The summarized texts are transformed into high-dimensional vectors using the `all-MiniLM-L6-v2` model, and cosine similarity is calculated to determine how well a candidate matches a job.
- **Final Score Calculation:** The match score is computed using a weighted formula:
  ```javascript
  Math.round(alpha * semanticScore + (1 - alpha) * ruleBasedScore)
  ```
  where semantic similarity and rule-based skill matching contribute to the final score.
- **Hybrid Recommendations:** The system extracts skills and non-skill requirements (experience, education, expertise) from both resumes and job descriptions. Based on missing or matching information, it generates actionable recommendations and motivational advice using predefined templates.

## Project Structure

```
├── src
│   ├── components
│   │   ├── Header.tsx               // Black header with rolling marquee and "Learn More" link
│   │   ├── Footer.tsx               // Sticky footer with copyright info
│   │   └── DownloadReportButton.tsx // Button to download PDF reports (using jsPDF)
│   ├── pages
│   │   ├── Home.tsx                 // Landing page
│   │   ├── Upload.tsx               // Page for uploading resumes and job descriptions
│   │   ├── Results.tsx              // Displays match score and recommendations
│   │   └── LearnMore
│   │       └── LearnMore.tsx        // Detailed project description and architecture overview
│   ├── App.tsx                      // Main application component with routing
│   └── index.css                    // Global CSS and Tailwind directives
├── package.json
└── README.md
```

## How It Works (End-to-End Flow)

1. **User Input:**  
   A candidate uploads their resume and selects a job description.

2. **Text Processing:**  
   - **Summarization:** Resumes and job descriptions are summarized using the `facebook/bart-large-cnn` model.
   - **Vectorization:** These summaries are converted into high-dimensional vectors using the `all-MiniLM-L6-v2` model.

3. **Similarity Analysis & Score Calculation:**  
   Cosine similarity between the vectors is calculated to determine the semantic match. A rule-based skill matching process is also performed. These two components are combined using a weighted formula to generate a final match score.

4. **Hybrid Recommendations:**  
   The system extracts skills and additional non-skill requirements from both the resume and job description. Missing skills and other gaps are highlighted, and actionable recommendations are generated using varied templates.

5. **Report Generation:**  
   Users can download a PDF report containing the resume summary, job summary, match score, and recommendations.

6. **Display:**  
   The results (match score, recommendations, summaries) are displayed in the frontend for the user to review.

## Additional Features

- **PDF Report Download:**  
  A downloadable report generated using jsPDF provides a professional summary of the analysis.
  
- **Responsive Header & Footer:**  
  The UI includes a dynamic header with a marquee effect that scrolls "AI powered Job-Resume Matching" and a sticky footer, ensuring a consistent experience across pages.
  
- **Batch Processing & Error Handling:**  
  The backend is optimized to process large amounts of data and handle errors gracefully (e.g., missing resume data, API failures).

## Future Improvements & Cautions

- **Enhanced AI Models:**  
  Future versions may fine-tune domain-specific models like BERT or DistilBERT for even more precise matching.
  
- **User Authentication:**  
  Planned enhancements include secure logins and personalized dashboards for job seekers.
  
- **Job Recommendation Engine:**  
  The system may expand to suggest job openings automatically based on candidate profiles.
  
- **Data Privacy & Security:**  
  Stricter data protection measures and encryption will be implemented in subsequent releases.
  
- **Caution:**  
  While CareerSync leverages advanced AI and rule-based techniques, the results may not always be perfect. Users are encouraged to cross-check the recommendations and use them as a guide rather than a definitive decision.

## Getting Started

### Prerequisites
- **Node.js** 
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone 
   cd CareerSync-Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

Start the development server:
```bash
npm start
# or
yarn start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment

To build the application for production, run:
```bash
npm run build
```
Deploy the build folder on your preferred hosting platform (we use Vercel for this project).
