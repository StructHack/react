import React,{useEffect, useState} from 'react';
import './slider.css';

function Slider(props){
	const [theme, setTheme] = useState(1);
	const {thNum, setthNum} = props;
	useEffect(()=>{
		switch(theme){
			case 1:
				setthNum(['default','del_default', 'res_default', 'equ_default']);
				break;
			case 2:
				setthNum(['style_2','del_style_2', 'res_style_2', 'equ_style_2']);
				break;
			case 3: 
				setthNum(['style_3','del_style_3', 'res_style_3', 'equ_style_3']);
				break;
			default:
				setthNum(['default','del_default', 'res_default', 'equ_default']);
		}
	},[theme])
	return(
			<div className="slider_container">
				<div>Calc</div>
				<div>
				<div className="num">1 2 3</div>
				<div className={`slider_${thNum[0]}`} id={theme.toString()} onClick={()=>{setTheme((prev)=>{return (prev==3) ? 1 : theme+1 })}}>
				</div>
				</div>
			</div>
		)	
}


export default Slider