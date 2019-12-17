import React from 'react'
import './Likes.scss'

const Likes = props => {

	return(
		<div className = 'Likes'>
			<i className = 'fa fa-heart'></i>
  			<span>{props.quantityLikes}</span>
		</div>
	);
}

export default Likes