import React from 'react';

const Button=(props)=>{
	return(<div>
			<input type="button" 
				class="button is-large is-primary is-outlined" 
				value={props.label} onClick={props.handleClick} />
			</div>)
}
export default Button;