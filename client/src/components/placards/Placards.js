import React, { Fragment } from 'react';
import { usePlacards } from '../../context/placards/PlacardState';
import PlacardItem from '../placards/PlacardItem';

const Placards = () => {
  const placardState = usePlacards()[0];

  const { placards } = placardState;

  return (
    <Fragment>
      <div className='row'>
        {placards.map((placard) => (
          <PlacardItem placard={placard} />
        ))}
      </div>
    </Fragment>
  );
};

export default Placards;
