import React from 'react';
import PropTypes from 'prop-types';

const PlacardItem = ({ placard }) => {
  const { title, desc, img, phone, email } = placard;

  return (
    <div className='col s12 m6 l4'>
      <div className='card small'>
        <div className='card-image'>
          <img src={img}></img>
        </div>
        <div className='card-content'>
          <span className='card-title'>{title}</span>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

PlacardItem.propTypes = {
  placard: PropTypes.object.isRequired,
};

export default PlacardItem;
