//Task 4.7

import React from 'react';
import style from './Title.css';

const Title = props => {
	return(
		<div className={style.Title}>
			<h1>{props.title}</h1>
			<h3>Number of tasks : {props.number}</h3>	
			<p>(Click the task to delete)</p> 
		</div>
	);
}
export default Title;