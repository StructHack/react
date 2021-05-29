import React from 'react';
import './display.css';


function Display(props){
	const {value,thNum} = props;
	return(
		<div className={`display ${thNum[0]}_display`}>
		{
			props.value
		}
		</div>
		)
}

export default Display;