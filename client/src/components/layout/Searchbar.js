import React from 'react';

const Searchbar = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='row'>
      <form className='col s12' onSubmit={onSubmit}>
        <div className='row'>
          <div className='input-field col s12'>
            <input type='text' id='searchAd' />
            <label htmlFor='searchAd'>Search Ads</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
