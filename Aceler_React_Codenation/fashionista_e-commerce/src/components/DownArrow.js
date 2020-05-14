import React, {Component} from 'react'

export default class RightArrow extends Component {
    render() {
        return (
            <div className='nextArrow' onClick={this.props.goToNextSlide}>
                <i className='fa fa-arrow-alt-circle-down fa-3x' aria-hidden='true'/>
            </div>
        )
    }
}
