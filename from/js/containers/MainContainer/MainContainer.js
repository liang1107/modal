import React from "react";


class MainContainer extends React.Component{
    constructor (props){
        super(props)
    }

    render(){
        return (
            <div>
                这
                {this.props.children}
            </div>


        )
    }
}
export default MainContainer