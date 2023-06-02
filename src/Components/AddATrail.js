import React, { useState } from 'react';

function AddATrail({ setTrails }) {
  let [trailObj, setTrailObj] = useState({});

  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    setTrailObj(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTrails(prev => [...prev, trailObj]);
  };

  return (
    <div className='center'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="location"
          placeholder="Location"
        />{' '}
        <input
          type="text"
          onChange={handleChange}
          name="image"
          placeholder="Image"
        />
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          onChange={handleChange}
          name="distance"
          placeholder="Distance"
        />
        <input
          type="text"
          onChange={handleChange}
          name="rate"
          placeholder="Rate"
        />
        <button type="submit">Add a Trail!</button>
      </form>
    </div>
  );
}

export default AddATrail;