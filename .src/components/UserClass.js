import React from "react";

class UserClass extends React.Component{

constructor(props){
    super(props)

    this.state = {
        count: 0
    }
}

    render(){
        const {name} = this.props
        const {count} = this.state
        return(
            <div>
                <h2>Name: {name}</h2>
                <button onClick={() => {this.setState({
                    count : this.state.count + 1
                })}}> 

                </button>
                <h3>{count}</h3>
                <h4>Location: Mysore</h4>
            </div>
        )
    }
}

export default UserClass;