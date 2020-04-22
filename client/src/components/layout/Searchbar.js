import React from 'react';

const Searchbar = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='row'>
      <form className='col s12' onSubmit={onSubmit}>
        <div className='row'>
          <div className='input-field col s8'>
            <input type='text' id='searchAd' />
            <label htmlFor='searchAd'>Search Ads</label>
          </div>
          <div className='input-field col s4'>
            <button
              type='submit'
              value='search'
              className='btn waves-effect green darken-1'
            >
              {' '}
              Submit
              <i class='material-icons right'>send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
