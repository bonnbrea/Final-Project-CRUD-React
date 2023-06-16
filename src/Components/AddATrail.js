import React, { useState } from 'react';

function AddATrail({ setTrails }) {
  let [trailObj, setTrailObj] = useState({});

// POST fetch call for posting new trails
  let addTrailData=() => {
    fetch('https://647149046a9370d5a41a4bb4.mockapi.io/trails', {
          method:'POST', 
          headers: {'content-type':'application/json'},
          body: JSON.stringify(trailObj)
      }).then(response => {
return (response.json())
      })
      .then(trailsResponse => {
        console.log (trailsResponse);
          }).catch (res => {
          })
        }




  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    setTrailObj(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTrails(prev => [...prev, trailObj]);
    addTrailData();     // call in POST
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