import AddComment from './AddComment';
import React from 'react';
import LikeButton from './LikeButton';


import Card from 'react-bootstrap/Card';






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
    // react-bootstrap styling with cards for each trail
    return (
      <Card key={i}>
        <Card.Header>{trail.name}</Card.Header>                  
        <Card.Body>
        <img style={{ width: '300px' }} src={trail.image} />
        <Card.Text>Location: {trail.location}</Card.Text>
        <Card.Text>Distance: {trail.distance}</Card.Text>
        <Card.Text>Rating: {trail.rate}</Card.Text>
        
        {trails.comments ? { comments } : null}
        

        <LikeButton innerRef={trail} />
          <AddComment />
  
          
  

        <button onClick= {() => {(deleteTrail(i+1))}}>Delete Trail</button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className= "center">
      {showTrailReviews}
    </div>
  );
}
export default TrailReview;