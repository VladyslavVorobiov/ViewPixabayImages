import React from 'react'
import './Card.scss'
import Image from '../Image/Image'
import Tags from '../Tags/Tags'
import Likes from '../Likes/Likes'
import Comments from '../Comments/Comments'
import {withRouter, NavLink} from 'react-router-dom'

//const Card = props => {

class Card extends React.Component {

	shouldComponentUpdate(nextProps, nextState, nextContext){
		if(nextProps.tags === this.props.tags){
			return false
		}
		return true
	}

	render(){

		return(
			<div className = 'Card'>
				<NavLink to = {'/cardDetails/' + this.props.id}>
					<Image 
						imageSource = {this.props.imageSource} 
						altImage = {this.props.altImage}
					/>
				</NavLink>
				<Tags 
					tags = {this.props.tags}
					isOptionTags = {true}
					onSaveTag = {this.props.onSaveTag}
					onDeleteTag = {this.props.onDeleteTag}
					idCard = {this.props.id}
					placeholderInputTag = {this.props.placeholderInputTag}
					valueInput = {this.props.valueInput}
				/>
				<Likes quantityLikes = {this.props.quantityLikes} />
				<Comments quantityComments = {this.props.quantityComments}/>
			</div>
		);
	}
	
}

export default withRouter(Card)