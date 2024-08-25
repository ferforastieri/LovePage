import React from 'react';
import styles from './LoveQuote.module.css';

interface LoveQuoteProps {
  quote: string;
  author: string;
}

export const LoveQuote: React.FC<LoveQuoteProps> = ({ quote, author }) => {
  return (
    <div className={styles.quoteContainer}>
      <p>{quote}</p>
      <small>- {author}</small>
    </div>
  );
};