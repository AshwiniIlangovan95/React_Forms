import React, { Component } from 'react';


class Uncontrolled extends Component { 

    constructor(props) { 
    super(props); 
    this.updateSubmit = this.updateSubmit.bind(this); 
    this.company = React.createRef();
    this.name = React.createRef(); 
    } 
    updateSubmit(event) { 
        alert('Name:'+ this.name.current.value+ " " +"Company Name:"+this.company.current.value ); 
        event.preventDefault(); 
    }

    render() { 
        return ( 

            <form onSubmit={this.updateSubmit}>
                <h1>Uncontrolled form example</h1>
                <label> Name:</label>
                <input type='text' ref={this.name}/>
                <label>Company Name:</label>
                <input type='text' ref={this.company}/>
                <input type='submit' value='submit'></input>
            </form>
        // <form onSubmit={this.updateSubmit}> 
        //     <h1>Uncontrolled Form Example</h1> 
        //     <label>Name: 
        //     <input type="text" ref={this.name} /> 
        //     </label> 
        //     <label> 
        //     CompanyName: 
        //     <input type="text" ref={this.company} /> 
        //     </label> 
        //     <input type="submit" value="Submit" /> 
        // </form> 
        ); 
        } 
    } 
   export default Uncontrolled;