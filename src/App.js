import React, {useState, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator';
import Display from './Components/Display';

function App() {

	const[num, setNum] = useState(0);
  return (
  		<div className="App">
  			<div className="calc">
  				<div>
	  				<Display value={num}/>
	  				<Calculator num={num} setNum={setNum}/>
  				</div>
  			</div>
  		</div>
  	)
}
export default App;
