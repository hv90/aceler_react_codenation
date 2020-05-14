import React, {Component} from 'react';
import './SliderBullets.css';

export default class SliderBullets extends Component {
    render() {
        let bulletsArray = [];
        let index = 0;

        while (index < this.props.length) {
            bulletsArray.push(
                <div
                    className={index++ === this.props.activeIndex ? "faactive" : "fainactive"}
                    key={index}
                >
                  <i className="fas fa-dot-circle"/>
                </div>
            )
        }

        return (
            <div className="bullets-slider">
                {bulletsArray}
            </div>
        )
    }
}
