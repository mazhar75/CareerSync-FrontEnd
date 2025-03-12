import React from 'react';
import styles from './LearnMore.module.css';

const LearnMore: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>CareerSync AI Platform</h1>
        <p className={styles.subtitle}>Intelligent Job-Resume Matching System</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Technology Stack</h2>
        <div className={styles.techGrid}>

          <div className={styles.techCard}>
            <h3>Frontend</h3>
            <ul className={styles.techList}>
              <li>
                <strong>React & TypeScript</strong>: Our UI is built with React for a modular, dynamic experience, with TypeScript providing robust type-checking.
              </li>
              <li>
                <strong>Modular CSS</strong>: We use scoped CSS modules (e.g., LearnMore.module.css) to maintain clean and maintainable styling.
              </li>
              <li>
                <strong>Responsive Design</strong>: Tailwind CSS is planned to further enhance responsiveness and modern design aesthetics.
              </li>
              <li>
                <strong>React Router & Vercel</strong>: Manage navigation across pages and deploy the frontend for fast, scalable delivery.
              </li>
            </ul>
          </div>

          <div className={styles.techCard}>
            <h3>Backend</h3>
            <ul className={styles.techList}>
              <li>
                <strong>Node.js & Express.js</strong>: Our server uses Express for efficient API routing and middleware handling.
              </li>
              <li>
                <strong>MongoDB</strong>: A NoSQL database that stores resumes, job descriptions, and match reports.
              </li>
              <li>
                <strong>RESTful API Design</strong>: Securely and efficiently connects the frontend with the backend.
              </li>
              <li>
                <strong>Error Handling & Batch Processing</strong>: Special handling ensures smooth processing even for large datasets.
              </li>
            </ul>
          </div>

          <div className={styles.techCard}>
            <h3>AI Processing</h3>
            <ul className={styles.techList}>
              <li>
                <strong>Hugging Face Sentence Transformers</strong>: We use the <code>all-MiniLM-L6-v2</code> model to convert resume and job description summaries into high-dimensional vectors (embeddings).
              </li>
              <li>
                <strong>Cosine Similarity Analysis</strong>: These embeddings are compared using cosine similarity, quantifying how closely a resume matches a job description.
              </li>
              <li>
                <strong>Text Summarization</strong>: The <code>facebook/bart-large-cnn</code> model condenses lengthy texts into focused summaries.
              </li>
              <li>
                <strong>Hybrid Recommendations</strong>: Our system blends semantic similarity with rule-based skill matching to generate actionable, personalized suggestions.
              </li>
            </ul>
          </div>

        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Matching Process</h2>
        <div className={styles.processSteps}>

          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Text Summarization & Vectorization</h3>
            <p>
              We preprocess resumes and job descriptions by summarizing them using <code>facebook/bart-large-cnn</code>. The resulting summaries are then transformed into high-dimensional vectors via the <code>all-MiniLM-L6-v2</code> model.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Similarity Analysis & Score Calculation</h3>
            <p>
              Cosine similarity between the generated vectors determines how closely the resume aligns with the job description. The final match score is computed using a weighted formula: <code>(alpha * semanticScore + (1 - alpha) * ruleBasedScore)</code>, where semantic similarity and rule-based skill matching are combined.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Hybrid Recommendations</h3>
            <p>
              Our hybrid engine examines both skills and additional requirements (experience, education, expertise) to produce personalized recommendations. These suggestions help candidates understand where they can improve their resumes.
            </p>
          </div>

        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Additional Features</h2>
        <ul className={styles.techList}>
          <li>
            <strong>PDF Report Download:</strong> Users can download a detailed PDF report, including resume and job summaries, match score, and recommendations, using the jsPDF library.
          </li>
          <li>
            <strong>Responsive Header & Footer:</strong> A dynamic header with a marquee effect and a sticky footer are present on every page for a consistent user experience.
          </li>
          <li>
            <strong>Batch Size Optimization:</strong> The backend is optimized for handling large text inputs and multiple API calls efficiently.
          </li>
          <li>
            <strong>Error Handling:</strong> Robust error handling ensures that the system gracefully manages missing inputs or API failures.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Future Improvements & Cautions</h2>
        <ul className={styles.techList}>
          <li>
            <strong>Enhanced AI Models:</strong> We plan to explore fine-tuning domain-specific models (like BERT/DistilBERT) for even more accurate matching.
          </li>
          <li>
            <strong>User Authentication:</strong> Future versions may include secure login and personalized dashboards.
          </li>
          <li>
            <strong>Job Recommendation Engine:</strong> We aim to expand our system to not only analyze resumes but also suggest suitable job openings automatically.
          </li>
          <li>
            <strong>Data Privacy & Security:</strong> Additional measures will be implemented to protect user data.
          </li>
          <li>
            <strong>Caution:</strong> While our system uses advanced AI and rule-based methods, it may not always provide perfect results. We recommend that users cross-check the recommendations and use them as a guide rather than a definitive answer.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LearnMore;
