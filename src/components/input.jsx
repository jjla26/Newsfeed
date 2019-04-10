import React from 'react'

export default class Input extends React.Component {
    render(){
        const { label, type, placeholder, name } = this.props
        return(
            <div className="form-group">
                <label>{label}</label>
                <input type={type} placeholder={placeholder} name={name} className="form-control">{this.props.children}</input>

            </div>
        )
    }
}