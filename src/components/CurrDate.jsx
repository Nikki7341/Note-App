import React from 'react';

const CurrDate = () => {
      let today = new Date();
     let options = {
           weekday: "long",
           day: "numeric",
           month: "long",
     }

     let day = today.toLocaleDateString("eg-US", options);
     
      return (
            <div>
                  <h1 id="date">{day}</h1>
            </div>
      )
}

export default CurrDate;
