import React from 'react'

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {_landing: props.mockData};
      }
    render() {
        return(
          <section>
          {
            this.state._landing.map((slide, index) =>
              <div 
                className={index === this.props.activeIndex ? 'active' : 'inactive'}
                key={index}
              >
                <h1>{slide.name}</h1>
                <img src={slide.image} alt={slide.name}/>
              </div>
            ) 
          }
          </section>
        )
      }
}
