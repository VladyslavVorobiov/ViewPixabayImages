import React from 'react'
import './Button.scss'

const Button = props => {

let classes = ['Button']
	classes.push(props.classes)

	return (
		<button
			onClick = {props.onClick}
			className = {classes.join(' ')}
		> 
			{props.children}
		</button>
	); 
};

export default Button;