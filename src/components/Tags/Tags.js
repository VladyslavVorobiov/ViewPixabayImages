import React from 'react'
import './Tags.scss'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'

const Tags = props => {

	let tagsArray = props.tags.split(', ');
	let inputTag;
	let valueInput = undefined
	//valueInput = {props.valueInput}

	let option = (<div>
					<Input 
						placeholder = {props.placeholderInputTag}
						valueInput = {valueInput}
						onChange = {event => {
							inputTag = event.target.value
							valueInput = inputTag
						}}
					/>
					<Button 
						classes='save'
						onClick = {() => {
							props.onSaveTag(inputTag, props.idCard)
							valueInput = undefined
						}}
					>
						Save
					</Button>
					<Button 
						classes='delete'
						onClick = {() => props.onDeleteTag(inputTag, props.idCard)}
					>
						Delete
					</Button>
				</div>);

	return(
		<div className = 'Tags'>
			{
				tagsArray.map((item,index) => {
					return(
						<Button key = {index + Math.random()} classes='tag' >{item}</Button>
					)
				})
			}

			{
				props.isOptionTags ? option : null
			}
			
		</div>
	);
}

export default Tags