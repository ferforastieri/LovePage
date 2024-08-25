import React from 'react';
import { Photo } from '../../types';
import styles from './PhotoGallery.module.css';

interface PhotoGalleryProps {
  photos: Photo[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  return (
    <div className={styles.photoGallery}>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.description} />
      ))}
    </div>
  );
};