import React from 'react';
import './Input.scss';

//const Input = props => {

class Input extends React.Component {

	state = {
		valueInput: this.props.valueInput
	}

	render(){
		const inputType = this.props.type || 'text' ;
		return (
			<input 
				type = {inputType}
				placeholder = {this.props.placeholder}
				value = {this.state.valueInput}
				onKeyUp = {this.props.onChangeInput}
				onChange = {this.props.onChange}
			/>
		);
	}
}

export default Input;