import React, { useState } from 'react';
import Display from './Display'
 





const Dashboard = () => {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);


    
  if (balls > 4) {
    setBalls(0);
  }
  
  if (strikes > 3) {
    setStrikes(0);
  }


   const hitScore = () => {
    setStrikes(0);
    setBalls(0);
}


const foulHit = () => {
     if (strikes === 0){
         setStrikes(strikes + 1)
        }else if (strikes === 1){
        setStrikes(strikes + 1)
        }else if (strikes === 2){
        setStrikes(2)

    }
}



  return (
      <div className='mainButtons'>
          <Display propsDisplay={balls} propsStrike={strikes} />
          <div>
              <button
               onClick={() => setBalls(balls + 1) }
              >Ball</button>
          </div>
          <div>
              <button
               onClick={() => setStrikes(strikes + 1) }
              >Strike</button>
          </div>
          <div>
              <button
               onClick={foulHit}
              >Foul</button>
          </div>
          <div>
              <button
               onClick={hitScore}
              >Hit</button>
          </div>
           
      </div>
  )




 }
 export default Dashboard;