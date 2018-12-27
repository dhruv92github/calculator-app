import React from 'react';

const OutputScreenRow=(props)=>{
	return(<div class="field">
	  			<div class="control">
					<input type="text" class="input is-rounded is-medium" 
					value={props.value} readOnly />
				</div>
			</div>)
}
export default OutputScreenRow;