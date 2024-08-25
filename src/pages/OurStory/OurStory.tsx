import React from 'react';
import { StoryTimeline } from '../../components/StoryTimeline/StoryTimeline';
import { Story } from '../../types';

const OurStory: React.FC = () => {
  const stories: Story[] = [
    { date: new Date(2020, 0, 1), title: "Nosso primeiro encontro", description: "..." },
    { date: new Date(2021, 5, 15), title: "Nosso noivado", description: "..." },
    // Adicione mais histórias
  ];

  return (
    <div>
      <h1>Nossa História</h1>
      <StoryTimeline stories={stories} />
    </div>
  );
};

export default OurStory;
