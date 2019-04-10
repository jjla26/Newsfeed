import React from 'react'

const style = {
    backgroundColor: '#fff'
}


export default class Chao extends React.Component {
    render(){
        const { title } = this.props
        return(
            <div style={style} className="col-md-4 text-center jumbotron">
                <h2>{title}</h2>
                {this.props.children}
            
            </div>
        )
    }
}