import React, {Component} from 'react';
import Slide from './Slide';
import UpArrow from './UpArrow';
import DownArrow from './DownArrow';
import './Slider.css';
import SliderBullets from './SliderBullets';

const mockData = require('./mockData');


export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _activeIndex: 0,
            _length: mockData.length
        };
    }

    goToPrevSlide = () => {
        let index = this.state._activeIndex;
        let length = this.state._length;
        if (index < 1) {
            index = length - 1;
        } else {
            index--;
        }
        this.setState({_activeIndex: index});
    }

    goToNextSlide = () => {
        let index = this.state._activeIndex;
        let length = this.state._length;
        if (index === length - 1) {
            index = 0
        } else {
            index++;
        }
        this.setState({_activeIndex: index});
    }

    render() {
        return (
            <div className='slider'>
                <div className='slider-items'>
                    <UpArrow 
                      goToPrevSlide={() => this.goToPrevSlide()}
                    />

                    <div className='slider-text'>
                        <Slide 
                          activeIndex={this.state._activeIndex} 
                          mockData={mockData}
                        />
                    </div>

                    <DownArrow 
                      goToNextSlide={() => this.goToNextSlide()}
                    />

                    <SliderBullets
                      activeIndex={this.state._activeIndex} 
                      length={this.state._length}
                    />
                </div>
            </div>
        )
    }
}