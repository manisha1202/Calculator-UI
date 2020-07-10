import React, {Component} from "react";
import OutputScreen from "./OutputScreen";
import Button from "./Button";
import CalculatorTitle from "./CalculatorTitle";
import axios from "axios";

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            question : "",
            answer : ""
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (event) => {
        const value = event.target.value;

        switch (value) {
            case '=': {
                axios.post("http://localhost:8080/basic",{
                    "expression":this.state.question
                })
                    .then(response =>{
                        this.setState({
                            answer : response.data
                        })
                        console.log(response);
                    })
                    .catch(error =>{
                        console.log(error);
                    })
                break;
            }
            case 'Adv(=)': {
                axios.post("http://localhost:8080/advance",{
                    "expression":this.state.question
                })
                    .then(response =>{
                        this.setState({
                            answer : response.data
                        })
                        console.log(response);
                    })
                    .catch(error =>{
                        console.log(error);
                    })
                break;
            }
            case 'Clear': {
                this.setState({
                    question: "",
                    answer: ""
                });
                break;
            }

            case 'Delete': {
                let str = this.state.question;
                str = str.substring(0,str.length-1);
                this.setState({
                    question: str
                });
                break;
            }

            default: {
                if(isNaN(value)){
                    this.setState({
                        question: this.state.question = this.state.question+" "+value+" "
                    })
                }else{
                    this.setState({
                        question: this.state.question += value
                    })
                }

                break;
            }
        }
    }
    render() {
        return (
            <div>
                <CalculatorTitle value="Calculator"/>
                <div className="mainCalc">
                    <OutputScreen answer={this.state.answer} question ={this.state.question} />
                    <div className="button-row">
                        <Button label={'Clear'} handleClick = {this.handleClick}/>
                        <Button label={'Delete'} handleClick = {this.handleClick}/>
                        <Button label={'.'} handleClick = {this.handleClick}/>
                        <Button label={'/'} handleClick = {this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'7'} handleClick = {this.handleClick}/>
                        <Button label={'8'} handleClick = {this.handleClick}/>
                        <Button label={'9'} handleClick = {this.handleClick}/>
                        <Button label={'*'} handleClick = {this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'4'} handleClick = {this.handleClick}/>
                        <Button label={'5'} handleClick = {this.handleClick}/>
                        <Button label={'6'} handleClick = {this.handleClick}/>
                        <Button label={'-'} handleClick = {this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'1'} handleClick = {this.handleClick}/>
                        <Button label={'2'} handleClick = {this.handleClick}/>
                        <Button label={'3'} handleClick = {this.handleClick}/>
                        <Button label={'+'} handleClick = {this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'0'} handleClick = {this.handleClick}/>
                        <Button label={'='} handleClick = {this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'!'} handleClick = {this.handleClick}/>
                        <Button label={'lg'} handleClick = {this.handleClick}/>
                        <Button label={'sqrt'} handleClick = {this.handleClick}/>
                        <Button label={'pi'} handleClick = {this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'Adv(=)'} handleClick = {this.handleClick}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Calculator

