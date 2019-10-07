import React from 'react';
import Dashboard from './Dashboard';
const Display = ({propsDisplay, propsStrike}) => {
    return(

      <div>
          
          <div>
              <h2>Balls:{propsDisplay}</h2>
          </div>
          <div>
              <h2>Strikes:{propsStrike}</h2>
          </div>
      </div>


    )
}
export default Display;