import React from 'react';
import { Story } from '../../types';
import styles from './StoryTimeline.module.css';

interface StoryTimelineProps {
  stories: Story[];
}

export const StoryTimeline: React.FC<StoryTimelineProps> = ({ stories }) => {
  return (
    <div className={styles.timeline}>
      {stories.map((story, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.timelineDate}>{story.date.toDateString()}</div>
          <h3>{story.title}</h3>
          <p>{story.description}</p>
        </div>
      ))}
    </div>
  );
};