import React from 'react'

export default class Form extends React.Component {
    render(){
        return(
            <form>
                {this.props.children}
            </form>
        )
    }
}