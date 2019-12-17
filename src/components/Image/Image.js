import React from 'react'
import './Image.scss'

const Image = props => {

	return(
		<img src = {props.imageSource} alt = {props.altImage} />
	);
}

export default Image