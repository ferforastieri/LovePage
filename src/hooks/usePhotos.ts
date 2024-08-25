import { useState, useEffect } from 'react';
import { Photo } from '../types';

export const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // Simule o carregamento de fotos (substitua por uma chamada API real)
    const loadedPhotos: Photo[] = [
      { id: '1', url: 'path/to/photo1.jpg', description: 'Nossa primeira foto juntos' },
      { id: '2', url: 'path/to/photo2.jpg', description: 'Férias na praia' },
      // Adicione mais fotos
    ];
    setPhotos(loadedPhotos);
  }, []);

  return photos;
};

