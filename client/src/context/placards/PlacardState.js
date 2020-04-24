import React, { useReducer, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PlacardContext from './placardContext';
import placardReducer from './placardReducer';
import { ADD_PLACARD } from '../types';

//custom hook to use context elsewhere
export const usePlacards = () => {
  const { state, dispatch } = useContext(PlacardContext);
  return [state, dispatch];
};

//actions

export const addPlacard = (dispatch, placard) => {
  placard.id = uuidv4();

  dispatch({
    type: ADD_PLACARD,
    payload: placard,
  });
};

const PlacardState = (props) => {
  const initialState = {
    placards: [
      {
        type: 'professional',
        _id: '5e99ae8d7a3cda35acec349a',
        title: 'Professional Massagist offering backrubs',
        desc: 'Will drive to your location. Call or Text',
        img:
          'http://moonblossomhealing.massagetherapy.com/images/mcith/thai-massage.jpg',
        email: '',
        phone: '444-444-444',
        user: '5e99adc67a3cda35acec3499',
        date: '2020-04-17T13:26:37.226Z',
        __v: 0,
      },
      {
        type: 'professional',
        _id: '5e98beca4d036426a448155c',
        title: 'Painting Homes, $25/h',
        desc: 'Painting homes for 10 years. Call now',
        img:
          'https://www.washingtonpost.com/resizer/3kBPq2bmVgo5D6a80rsGd85_2PA=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A724RBEN2AI6PHCTNILJX2YJKM.jpg',
        email: 'Paintbrush01@gmail.com',
        phone: '987-459-7894',
        user: '5e9899d387d8993600b21c54',
        date: '2020-04-16T20:23:38.776Z',
        __v: 0,
      },
      {
        type: 'professional',
        _id: '5e98bc78c7df9020e0f3c227',
        title: 'Looking to cut grass, friendly price',
        desc: 'Offering friendly prices in Broward County',
        img:
          'https://news.christianacare.org/wp-content/uploads/2017/08/shutterstock_35114542_stretched-3-800x363.jpg',
        email: '',
        phone: '654-456-987',
        user: '5e9899d387d8993600b21c54',
        date: '2020-04-16T20:13:44.069Z',
        __v: 0,
      },
    ],
  };

  const [state, dispatch] = useReducer(placardReducer, initialState);

  return (
    <PlacardContext.Provider
      value={{
        state: state,
        dispatch,
      }}
    >
      {props.children}
    </PlacardContext.Provider>
  );
};

export default PlacardState;
