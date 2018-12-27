import React,{Component} from 'react';
import CalculatorTitle from './calculatorTitle';
import OutputScreen from './outputScreen';
import Button from './button';

class Calculator extends Component{

	constructor(){
		super();
		this.state={question:'',
					answer:''}
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(e){
		const value=e.target.value;

		switch(value){
			case '=':{
				if(this.state.question!==''){
					try{
						var ans=eval(this.state.question);
						// alert("output is : "+ans);
						console.log(ans);
					}
					catch(err){
						this.setState({answer:'Math error'})
					}
					if(ans===undefined){
						this.setState({answer:'Math error'})
					}else{
						this.setState({answer:ans})
					}
					
					
				}else{
					this.setState({answer:''})
				}
				break;
			}
			case 'C':{
				this.setState({answer:'',question:''})
				break;
			}
			case 'Del':{

				let str=this.state.question;
				str=str.substr(0,str.length-1);
				this.setState({question:str});
				break;

			}
			default:{
				this.setState({question:this.state.question +=value});

				break;

			}


		}



	}


	render(){
		return(<div class="container">
			<div class="column is-4 is-offset-4">
			<CalculatorTitle name='Calculator App' />
			<OutputScreen value={this.state} />
			<br/>
			<div class="column is-offset-2">
			<div class="columns" >
				<Button label={'C'}  handleClick={this.handleClick} />
				<Button label={'Del'} handleClick={this.handleClick} />
				<Button label={'.'} handleClick={this.handleClick} />
				<Button label={'/'} handleClick={this.handleClick} />
			</div>

			<div class="columns" >
				<Button label={'7'} handleClick={this.handleClick} />
				<Button label={'8'} handleClick={this.handleClick} />
				<Button label={'9'} handleClick={this.handleClick} />
				<Button label={'*'}  handleClick={this.handleClick}/>
			</div>

			<div class="columns" >
				<Button label={'4'} handleClick={this.handleClick} />
				<Button label={'5'} handleClick={this.handleClick} />
				<Button label={'6'} handleClick={this.handleClick} />
				<Button label={'-'} handleClick={this.handleClick} />
			</div>
			<div class="columns" >
				<Button label={'1'}  handleClick={this.handleClick}/>
				<Button label={'2'}  handleClick={this.handleClick}/>
				<Button label={'3'}  handleClick={this.handleClick}/>
				<Button label={'+'}  handleClick={this.handleClick}/>
			</div>
			<div class="columns" >
				<Button label={'0'} handleClick={this.handleClick} />
				<Button label={'='}  handleClick={this.handleClick}/>
				
			</div>
			</div>
			</div>
			</div>)
	}

}
export default Calculator;