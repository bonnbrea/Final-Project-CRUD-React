import React, { useState } from 'react';
import TrailReview from './TrailReview';
import AddATrail from './AddATrail';



let initialTrails = [
    {
      image:'https://gowanderwild.com/wp-content/uploads/2022/06/Creekside-Towers-Katy-Vona-600x800.jpg',
      location: 'Southern Idaho, 38 miles from Burley',
      name: 'Creekside Towers',
      distance: '1.4 miles',
      rate: '4',
        
    },
    {
        image:'https://gowanderwild.com/wp-content/uploads/2022/06/Tubbs-Hill-Sherrill-Cushing.jpg',
        location: 'Northwest Idaho, in Coeur dAlene',
        name: 'Tubbs Hill',
        distance: '2-mile loop',
        rate: '4.8',
       
    },
    {
        image:'https://gowanderwild.com/wp-content/uploads/2022/06/Table-Rock-Trail-Andrea-Jones.jpg',
        location: 'Southwestern Idaho, 2 miles from Boise',
        name: 'Table Rock Trail',
        distance: '3.7-mile loop',
        rate: '3.9',
    },
    {
        image:'https://gowanderwild.com/wp-content/uploads/2022/06/Stanley-Lake-to-Bridalveil-Falls-Lee-Sappington-600x800.jpg',
        location: 'Southeast Idaho, 20 miles from Acro',
        name: 'Stanley Lake To Bridal Veil Falls ',
        distance: '7.3 miles',
        rate: '4',    
      }

  ];


 function ReviewPage () {
    let [trails, setTrails] = useState(initialTrails);
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


