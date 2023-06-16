
import React, { useState } from 'react';

let initialComments= [];


  function AddComment() {
    let [comment,setComment] = useState("");
    const [comments, setComments] =useState(initialComments);
  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, comment]); 
    
  }




  return (
    <form onSubmit={handleSubmit}>
      <label>Review this trail!
        <br>
        </br>
        <input 
          type="text" 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <input type="submit" />
      <div>{
      comments.map((comment, i) => {
        return (
          <div key={comment}>
          <p>
            {comment}
          </p>
          <button onClick={() => {setComments(comments.filter(c => c != comment));}}>Delete Comment</button>
        </div>
        );
      })
    }</div>
    </form>
  )
}
  export default AddComment;




  
