import React from 'react'
import './CardDetails.scss'
import Image from '../Image/Image'
import Tags from '../Tags/Tags'
import Likes from '../Likes/Likes'
import Comments from '../Comments/Comments'
import {connect} from 'react-redux'
import {getApiPixabay} from '../../store/actions/cardList'

const CardDetails = props => {

	const cardList = props.apiPixabay.hits.concat()
	const cardItem = cardList.find( item => +item.id === +props.match.params.id)

	return(
		<div className = 'CardDetails'>
			<Image
				imageSource = {cardItem.webformatURL}
				altImage = {cardItem.tags}
			/>
			<Tags tags = {cardItem.tags} isOptionTags = {false}/>
			<Likes quantityLikes = {cardItem.likes} />
			<Comments quantityComments = {cardItem.comments}/>
		</div>
	);
}

function mapStateToProps(state){
	return {
		apiPixabay: state.cardList.apiPixabay
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getApiPixabay: () => dispatch(getApiPixabay())
	}
}

//export default CardDetails
export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);