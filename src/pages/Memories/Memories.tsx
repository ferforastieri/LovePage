import React from 'react';
import { PhotoGallery } from '../../components/PhotoGallery/PhotoGallery';
import { Photo } from '../../types';
import { usePhotos } from '../../hooks/usePhotos';

const Memories: React.FC = () => {
  const photos: Photo[] = usePhotos(); // Tipar `photos` se necessário

  return (
    <div>
      <h1>Nossas Memórias</h1>
      <PhotoGallery photos={photos} />
    </div>
  );
};

export default Memories; // Exportação como default
