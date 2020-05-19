import React, {Component} from 'react';
import Slide from './Slide';
import UpArrow from './UpArrow';
import DownArrow from './DownArrow';
import './Slider.css';
import SliderBullets from './SliderBullets';


export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _activeIndex: 0,
            _slidesArray:[]
        };
    }

    componentDidMount() {
        fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
            .then(response => response.json())
            .then(slidesArray => this.setState({_slidesArray: slidesArray}))
    }

    goToPrevSlide = () => {
        let index = this.state._activeIndex;
        let length = this.state._slidesArray.length;
        if (index < 1) {
            index = length - 1;
        } else {
            index--;
        }
        this.setState({_activeIndex: index});
    }

    goToNextSlide = () => {
        let index = this.state._activeIndex;
        let length = this.state._slidesArray.length;
        if (index === length - 1) {
            index = 0;
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
                          slidesArray={this.state._slidesArray}
                        />
                    </div>

                    <DownArrow 
                      goToNextSlide={() => this.goToNextSlide()}
                    />

                    {<SliderBullets
                      activeIndex={this.state._activeIndex} 
                      length={this.state._slidesArray.length}
                    />}
                </div>
            </div>
        )
    }
}