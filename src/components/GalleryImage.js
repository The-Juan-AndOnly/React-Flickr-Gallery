import React from 'react';

const GalleryImage = ({ photo: { farm, server, id, secret, title } }) => {
  // const { farm, server, id, secret, title } = props.photo;
  return (
    <li>
      <img
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title}
      />
    </li>
  );
};

export default GalleryImage;
