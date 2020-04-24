import React, { useEffect } from 'react';
import { usePlacards, getPlacard } from '../../context/placards/PlacardState';

const PlacardLarge = ({ match }) => {
  const [placardState, placardDispatch] = usePlacards();

  const { placard } = placardState;

  const onClick = (e) => {
    getPlacard(placardDispatch, match.params.id);
    console.log(match.params.id);
    console.log(placard);
  };

  return <button onClick={onClick}>debug</button>;
};

export default PlacardLarge;
