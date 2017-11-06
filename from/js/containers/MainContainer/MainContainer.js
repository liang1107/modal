import React from "react";


class MainContainer extends React.Component{
    constructor (props){
        super(props)
    }

    render(){
        return (
            <div>

                {this.props.children}
            </div>


        )
    }
}
export default MainContainer