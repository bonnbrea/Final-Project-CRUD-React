import React, { useEffect, useState } from 'react';
import TrailReview from './TrailReview';
import AddATrail from './AddATrail';




 function ReviewPage () {
    let [trails, setTrails] = useState([]);
    let fetchUserData=() => {                           //GET fetch call for trail data
      fetch('https://647149046a9370d5a41a4bb4.mockapi.io/trails', {
            method:'GET', 
            headers: {'content-type':'application/json'},
        }).then(response => {
return (response.json())
        })
        .then(trailsResponse => {
          console.log (trailsResponse);
            setTrails(trailsResponse);
            }).catch (res => {
            })
          }
      
          useEffect(() => {
            fetchUserData()
          }, []);
    
    return (
    <div>
        
  
        <TrailReview trails={trails} setTrails={setTrails} />
        <br>
        </br>
        <AddATrail setTrails={setTrails} />
      </div>
    );
    }

  
export default ReviewPage;



 