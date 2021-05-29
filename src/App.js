import React, {useState, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator';
import Display from './Components/Display';
import Slider from './Slider'

function App() {

	const[num, setNum] = useState(0);
	const [thNum, setthNum] = useState(['default','del_default', 'res_default', 'equ_default']);
  return (
  		<div className={`App app_${thNum[0]}`} >
  			<div className="calc">
  				<div>
  					<Slider thNum={thNum} setthNum={setthNum} />
	  				<Display value={num} thNum={thNum}/>
	  				<Calculator num={num} setNum={setNum} thNum={thNum}/>
  				</div>
  			</div>
  		</div>
  	)
}
export default App;
