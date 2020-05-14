import React, {Component} from 'react'

export default class LeftArrow extends Component {
    render() {
        return (
            <div className='backArrow' onClick={this.props.goToPrevSlide}>
                <i className='fa fa-arrow-alt-circle-up fa-3x' aria-hidden='true'/>
            </div>
        )
    }
}
