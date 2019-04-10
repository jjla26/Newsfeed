import React from 'react'

const classButton = (color) => {
    switch (color) {
        case 'primary':
            return 'btn btn-primary'
    
        case 'secondary':
            return 'btn btn-success';
    }

}

export default class Button extends React.Component{
    render(){
        const { color } = this.props
        return(
            <button className={classButton(color)}>
                {this.props.children}

            </button>
        )
    }
}