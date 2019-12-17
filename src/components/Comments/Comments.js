import React from 'react'
import './Comments.scss'

const Comments = props => {

	return(
		<div>
			<div className = 'Comments'>
				<i className="far fa-comment"></i>
				<span>{props.quantityComments}</span>
			</div>
		</div>
		
	);
}

export default Comments