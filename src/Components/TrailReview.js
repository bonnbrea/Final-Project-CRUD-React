import AddComment from './AddComment';
import React from 'react';
import LikeButton from './LikeButton';
function TrailReview({ trails, setTrails }) {


// DELETE fetch call for deleting a trail
let deleteTrail=(id) => {
  setTrails(trails.slice(0,id-1).concat(trails.slice(id)));
  fetch('https://647149046a9370d5a41a4bb4.mockapi.io/trails/'+id, {
    method:'DELETE'
}).then(response => {
return (response.json())
})
.then(trailsResponse => {
  console.log (trailsResponse);
    }).catch (res => {
    })
  }


  let showTrailReviews = trails.map((trail, i) => {
    let comments;
    
   

    if (trail.comments) {
      comments = trail.comments.map((comment, i) => {
        return (
          <p>
            {comment.text}
          </p>
        );
      });
    }
    
    return (
      <div key={i}>
        <h1>{trail.name}</h1>
        <img style={{ width: '300px' }} src={trail.image} />
        <h3>Location: {trail.location}</h3>
        <h3>Distance: {trail.distance}</h3>
        <h3>Rating: {trail.rate}</h3>
        
        {trails.comments ? { comments } : null}
        

        <LikeButton innerRef={trail} />
          <AddComment />
  
          
  

        <button onClick= {() => {(deleteTrail(i+1))}}>Delete Trail</button>

      </div>
    );
  });

  return (
    <div className= "center">
      {showTrailReviews}
    </div>
  );
}
export default TrailReview;