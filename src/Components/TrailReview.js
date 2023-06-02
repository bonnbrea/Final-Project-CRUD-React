import AddComment from './AddComment';
import React from 'react';

function TrailReview({ trails, setTrails }) {
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
        <AddComment />

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