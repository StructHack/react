import React, {useState, useRef, useEffect} from 'react';
import './calc.css';

function evalArg(arg){
	try{
		return eval(arg)
	}
	catch(e){
		return 0;
	}
}


function Calculator(props){

	const {num, setNum} =  props;
	const [argument, setArgument] = useState(0);
	useEffect(()=>{
		setNum(argument);
		console.log(num)
	},[argument])
	return(

			<div className="calc_container default_calc">
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'7'})}}>7</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'8'})}}>8</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'9'})}}>9</div>
				<div className="num default del_default" onClick={()=>{setArgument((prevArg)=>{return prevArg.slice(0, prevArg.length-1)})}}>DEL</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'4'})}}>4</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'5'})}}>5</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'6'})}}>6</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'+'})}}>+</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'1'})}}>1</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'2'})}}>2</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'3'})}}>3</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'-'})}}>-</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'.'})}}>.</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'0'})}}>0</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'/'})}}>/</div>
				<div className="num default" onClick={()=>{setArgument((prevArg)=>{return (prevArg?prevArg:'')+'*'})}}>x</div>
				<div className="num default res_default" onClick={()=>{setArgument('')}}>Reset</div>
				<div className="num default equ_default" onClick={()=>{setArgument((prevArg)=>{return evalArg(prevArg)})}}>=</div>
			</div>
		)
}

export default Calculator