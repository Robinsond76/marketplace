import React from 'react';
import PropTypes from 'prop-types';

const PlacardItem = ({ placard }) => {
  const { title, desc, img, phone, email, _id } = placard;
  const url = '/placard/' + _id;

  return (
    <div className='col s12 m6 l4'>
      <div className='card small'>
        <div className='card-image'>
          <a {...{ href: url }}>
            <img src={img}></img>
          </a>
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
