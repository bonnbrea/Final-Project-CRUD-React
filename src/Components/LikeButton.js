import React, { useState } from 'react';


const LikeButton = ({innerRef}) => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

// PUT fetch call for updating likes on trail
let updateLikes=(likesAmount) => {
    fetch('https://647149046a9370d5a41a4bb4.mockapi.io/trails/'+innerRef.id, {
          method:'PUT', 
          headers: {'content-type':'application/json'},
          body: JSON.stringify({likes:likesAmount})
      }).then(response => {
return (response.json())
      })
      .then(trailsResponse => {
        console.log (trailsResponse);
          }).catch (res => {
          })
        }






  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
      updateLikes(likes -1);
    } else {
      setLikes(likes + 1);
      updateLikes(likes+1);
    }
    setIsClicked(!isClicked);
   
  };

  return (
    <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
      <span className="likes-counter">{ `Like 👍 | ${likes}` }</span>
    </button>
  );
};

export default LikeButton;