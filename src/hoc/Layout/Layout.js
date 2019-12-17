import React from 'react'
import './Layout.scss'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import {NavLink} from 'react-router-dom'

class Layout extends React.Component {

	render(){

		return (
			<div className = "Layout">
				<nav>
					<div>
						<NavLink to = "/" >
							<Button onClick = {() => this.props.onSortCancel()}>Home</Button>
						</NavLink>
						<Button classes = 'sort' onClick = {() => this.props.onSortByLikes()}>By likes</Button>
						<Button classes = 'sort' onClick = {() => this.props.onSortByComments()}>By comments</Button>
						<Button classes = 'sort' onClick = {() => this.props.onSortCancel()}>Cancel</Button>
						<Input
							onChangeInput = { event => this.props.onSortByTags(event)}
							placeholder = {this.props.placeHolderInputByTags}
						/>
					</div>
				</nav>

				<main>
					{this.props.children}
				</main>

				<footer>
					<p>
						<a href="https://pixabay.com/"><img src="./logo_Pixabay.png"
  							alt="pixabay" target="_blank"/>
  						</a>&nbsp;
  						Pixabay. Free Images
  					</p>
				</footer>
			</div>
		);
	}
}

export default Layout