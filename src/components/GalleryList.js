import React from 'react';
import GalleryImage from './GalleryImage';
import NotFound from './NotFound';

const GalleryList = props => {
  return (
    <div className="photo-container">
      <h2> {props.match.params.query}</h2>
      <ul>
        {props.photos.length === 0 ? (
          <NotFound />
        ) : (
          props.photos.map(photo => {
            return <GalleryImage photo={photo} key={photo.id} />;
          })
        )}
      </ul>
    </div>
  );
};

export default GalleryList;
