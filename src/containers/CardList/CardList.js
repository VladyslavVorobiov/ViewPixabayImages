import React from 'react'
import './CardList.scss'
import Card from '../../components/Card/Card'
import Loader from '../../components/UI/Loader/Loader'
import {connect} from 'react-redux'
import {getDataFromPixabay, saveNewTagOfCard, deleteTagOfCard} from '../../store/actions/cardList'

class CardList extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			isSortByTags: false,
			isCardShouldBeRender: false,
			valueInput: undefined
		}

		this.placeholderInputTag = "Tag to save or delete..."
		

		this.saveTagHandler = this.saveTagHandler.bind(this)
		this.deleteTagHandler = this.deleteTagHandler.bind(this)
	}

	componentDidMount(){

		if(!this.props.isDataRecieved){
			this.props.getDataFromPixabay('https://pixabay.com/api/?key=14528338-38e504fd79dd6aa7d0ecaed2c&q=space&image_type=all&per_page=50');
		}
		
		
		if (this.state.isSortByTags === true) {
   			 this.setState({isSortByTags: false});
  		}
	}

	shouldComponentUpdate(nextProps, nextState, nextContext){
		if(nextProps.valueInputSortByTags !==  this.props.valueInputSortByTags){
			this.setState({isSortByTags: false})
			this.interval = setTimeout( () => this.setState({isSortByTags: true}) , 300)
		}

		return true
	}

	componentWillUnmount() {
		this.setState({
 			isCardShouldBeRender: false
 		})
   		clearInterval(this.interval)
 	}

 	saveTagHandler(value, idCard){
 		this.props.saveNewTagOfCard(value, idCard)
 		this.setState({
 			isCardShouldBeRender: true,
 			valueInput: undefined
 		})
 	}

 	deleteTagHandler(value, idCard){
 		this.props.deleteTagOfCard(value, idCard)
 		this.setState({
 			isCardShouldBeRender: true,
 			valueInput: undefined
 		})
 	}

	renderCards(){
		let hits = this.props.apiPixabay.hits.concat();
		const isSortByTags = this.state.isSortByTags;

		if(this.props.isSortByLikes === true){
			hits.sort((a, b) => a.likes - b.likes)
		}
		
		if(this.props.isSortByComments === true){
			hits.sort((a, b) => a.comments - b.comments)
		}

		if(isSortByTags){
			let result = [];
			result = hits.filter((item) => 
					item.tags.includes(this.props.valueInputSortByTags.trim()
				))
			hits = result.concat()
		}

		return hits.map((item,index) => {
			return(
				<Card
					key = {item.id}
					id = {item.id}
					imageSource = {item.webformatURL}
					altImage = {item.tags}
					quantityComments = {item.comments}
					quantityLikes = {item.likes}
					tags = {item.tags}
					onSaveTag = {this.saveTagHandler}
					onDeleteTag = {this.deleteTagHandler}
					isCardShouldBeRender = {this.state.isCardShouldBeRender}
					placeholderInputTag = {this.placeholderInputTag}
					valueInput = {this.state.valueInput}
				/>
			);
		});
	}

	render(){

		if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

		return(
			<div className = 'CardList'>
			{
				this.props.isLoading || !this.props.apiPixabay.hits
				? <Loader />
				: <React.Fragment> {this.renderCards()} </React.Fragment>
			}
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		apiPixabay: state.cardList.apiPixabay,
		hasErrored: state.cardList.hasErrored,
        isLoading: state.cardList.isLoading,
		isDataRecieved: state.cardList.isDataRecieved
	}
}

function mapDispatchToProps(dispatch){
	return{
		getDataFromPixabay: url => dispatch(getDataFromPixabay(url)),
		saveNewTagOfCard: (newTag, idCard) => dispatch(saveNewTagOfCard(newTag, idCard)),
		deleteTagOfCard: (tag, idCard) => dispatch(deleteTagOfCard(tag, idCard))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
