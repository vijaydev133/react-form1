import React from "react"

export default class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            userName : "",
            age : "",
            err : ""
        }
    }

    // handleNameChange=(event)=>{
    //     console.log(event.target.value);
    //     this.setState({userName : event.target.value})
    // }

    // handleAgeChange=(event)=>{
    //     console.log(event.target.value);
    //     this.setState({age: event.target.value})
    // }
    handleChange=(event)=>{
        if(event.target.name == "age"){
            if(isNaN(event.target.value)){
                this.setState({err : "number should be in this box"})
            }else{
                this.setState({err : ""})
            }
        }
        this.setState({[event.target.name] : event.target.value})
        console.log(event);
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        console.log(this.state);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                name="userName"
                // value={this.state.userName}
                onChange = {this.handleChange}
                type="text" /> <br />

<input
                name="age"
                // value={this.state.age}
                onChange = {this.handleChange}
                />
                <p>{this.state.err} </p>
                <input type="submit" />
            </form>
        )
        
    }
}