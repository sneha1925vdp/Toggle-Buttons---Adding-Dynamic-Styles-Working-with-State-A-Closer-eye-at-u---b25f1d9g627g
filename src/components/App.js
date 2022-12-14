import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
  const [state, setState] = useState(true);
  const handleClick =()=>{
    setState(!state);
  }
  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {/* assign value for button 1 */}
      {state ? 'OFF' : 'ON'}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {/* assign value for button 2 */}
        {!state ? 'OFF' : 'ON'}
      </button>
    </div>
  );
}


export default App;
