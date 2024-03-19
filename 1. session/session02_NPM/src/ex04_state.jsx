import React from 'react'

class TestState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            msg: "Example of State!"
        }
    }

    render(){
      return <h1>{this.state.msg}</h1>  
    }
}

export default TestState;