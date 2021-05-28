import React,{useEffect, useState} from 'react';
import './slider.css';

function Slider(){
	const [theme, setTheme] = useState(1);
	useEffect(()=>{
		console.log(theme)
	})
	return(
			<div className="slider_container">
				<div>Calc</div>

				<div className="slider default" id={theme.toString()} onClick={()=>{setTheme((prev)=>{return (prev==3) ? 1 : theme+1 })}}>
					
				</div>
			</div>
		)	
}


export default Slider