import React, { Component } from "react";

class FormsReact extends Component{
    constructor (props){
        super(props)
        this.state={
            username:'',
            topic:'',
            comments:''
        }
    }

    usernameChange = (event)=>{
        this.setState({
            username: event.target.value
        })
    }

    topicChange = (event)=>{
        this.setState({
            topic : event.target.value
        })
    }

    commentsChange = (event)=>{
        this.setState({
            comments : event.target.value
        })
    }


    // usernameChange= (event)=>{
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    // topicChange=(event)=>{
    //     this.setState({
    //         topic: event.target.value
    //     })
    // }

    // commentsChange=(event)=>{
    //     this.setState({
    //         comments: event.target.value
    //     })
    // }

    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.topic} ${this.state.comments} `)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    User Name: <br/>
                    <input type="text" value={this.state.username} onChange={this.usernameChange} ></input> <br/>
                    Topic: <br/>
                    <select value={this.state.topic} onChange={this.topicChange}>
                        <option value='select'>select</option>
                       <option value="React">React</option>
                       <option value="Angular">Angular</option>
                       <option value="HTML">HTML</option>
                       <option value="CSS">CSS</option>
                       <option value="JavaScript">JavaScript</option>
                    </select> <br/>
                    Comment: <br/>
                    <textarea typeof="text" value={this.state.comments} onChange={this.commentsChange}></textarea><br/>
                    <button type="submit">Submit</button>
                </div>
            </form>

            // <form onSubmit={this.handleSubmit}>
            // <div>
                
            //     UserName:<br/>
            //     <input type="text" value={this.state.username} onChange={this.usernameChange} ></input>
            //     <br/>
            //     Topic: <br/>
            //     <select value={this.state.topic} onChange={this.topicChange}>
            //         <option value="React">React</option>
            //         <option value="Angular">Angular</option>
            //         <option value="HTML">HTML</option>
            //         <option value="CSS">CSS</option>
            //         <option value="JavaScript">JavaScript</option>
            //     </select>
            //     <br/>
            //     Comments:<br/>
            //     <textarea/>

            //     <textarea value={this.state.comments} onChange={this.commentsChange}/><br/>
            //     <button type="submit">Submit</button>
                           
            // </div>
            // </form>
        )
    }
}

export default FormsReact;