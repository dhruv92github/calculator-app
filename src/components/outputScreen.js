import React from 'react';
import OutputScreenRow from './outputScreenRow';

const OutputScreen=(props)=>{
	return(<div >
		<OutputScreenRow value={props.value.question} />
		<OutputScreenRow value={props.value.answer}/>
		</div>)
}
export default OutputScreen;