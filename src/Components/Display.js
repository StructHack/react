import React from 'react';
import './display.css';


function Display(props){
	const {value} = props;
	return(
		<div className="display">
		{
			props.value
		}
		</div>
		)
}

export default Display;