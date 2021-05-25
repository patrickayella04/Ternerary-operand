import React, { useState } from 'react';
import './App.css';

function App() {
  const [change, setChange] = useState(false);
  const [change2, setChange2] = useState(false);
  const [change3, setChange3] = useState(false);
  
  
  const revert = () => {
    setTimeout(() => {
      setChange(false)
      setChange2(false)
    }, 2000)
  }

  

  return (
    <div>
      {
        change && change2 ?
          <div>
          <div>Hello</div>  
            <div>Random</div>
            <button onClick={() => revert()}>Revert back to normal</button>
        </div>
          :
          <div>
          
          <button onClick={() => setChange(!change)}>change</button>

            <button onClick={() => setChange2(!change2)}>change2</button>
            
          </div>
        
        
      }
      {/* <button onClick={() => setChange3(!change3)}>enable</button> */}
      <button style={ {color:!change2 ? 'red':'black'} }>Button</button>
   </div>
  );

}

export default App;
