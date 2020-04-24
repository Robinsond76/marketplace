import React, { useState } from 'react';
import { usePlacards, addPlacard } from '../../context/placards/PlacardState';

const PlacardForm = (props) => {
  const placardDispatch = usePlacards()[1];

  const [placard, setPlacard] = useState({
    title: '',
    desc: '',
    img: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { title, desc, img, email, phone, type } = placard;

  const onSubmit = (e) => {
    //addPlacard
    addPlacard(placardDispatch, placard);
    //clear placard
    setPlacard({
      title: '',
      desc: '',
      img: '',
      email: '',
      phone: '',
      type: 'personal',
    });
    //Reroute
    props.history.push('/');
  };

  const onChange = (e) => {
    setPlacard({ ...placard, [e.target.name]: e.target.value });
  };

  return (
    <div className='row'>
      <div className='col s12'>
        <h4>Create Ad</h4>
      </div>
      <div className='row'>
        <form onSubmit={onSubmit} className='col s12'>
          <div className='row'>
            <div className='input-field col s4'>
              <input
                type='text'
                id='title'
                name='title'
                value={title}
                onChange={onChange}
              />
              <label htmlFor='title'>Title</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s8'>
              <textarea
                id='description'
                className='materialize-textarea'
                name='desc'
                value={desc}
                onChange={onChange}
              ></textarea>
              <label htmlFor='description'>Description</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s8'>
              <input
                type='text'
                id='img'
                name='img'
                value={img}
                onChange={onChange}
              />
              <label htmlFor='img'>Image link</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s8 '>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={onChange}
              />
              <label htmlFor='email'>Email</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s8'>
              <input
                type='text'
                id='phone'
                name='phone'
                value={phone}
                onChange={onChange}
              />
              <label htmlFor='email'>Phone</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s2'>
              <ul>
                <li>
                  <label>
                    <input
                      className='with-gap'
                      name='type'
                      type='radio'
                      value='personal'
                      defaultChecked
                      onChange={onChange}
                    />
                    <span>Personal</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      className='with-gap'
                      name='type'
                      type='radio'
                      value='professional'
                      onChange={onChange}
                    />
                    <span>Professional</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <button className='btn waves-effect blue' type='submit'>
            Submit
            <i className='material-icons right'>send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlacardForm;
