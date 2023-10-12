import React from "react";

class Profileclass extends React.Component{
    constructor(props){
        super(props);
//creating state variables inside class based components
        this.state={
            count:0,
            count1 :0
        }

        console.log("Child constructor");
    }

    componentDidMount(){
        console.log("child Component Mounted");
    }
    componentDidUpdate(){
        console.log("child Component Updated");
    }
    componentWillUnmount(){
        console.log("child Component UnMounted");
    }
    render(){
        console.log("child rendered function");
        const {name,color}=this.props;
        const {count,count1}=this.state;
        return(
            // class based components creating props
            //object destructring using class based components
           
           <>
                <h1>ProfileClass Component</h1>
                <h2>Name:{name}</h2>
                <h2>Color:{color}</h2>
                <h2>Count: {count}</h2>
                <h2>Count1:{count1}</h2>
                <button onClick={()=>this.setState({count:1,count1:2})}>Update Count</button>
            </>
        )
    }
}
/**
 * direct accesing of values without object destructring
 * <h2>name:{this.props.name}</h2>
   <h2>color:{this.props.color}</h2>
 */

export default Profileclass;