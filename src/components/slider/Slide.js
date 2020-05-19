import React from 'react'

export default class Slide extends React.Component {
    render() {
        return(
          <section>
          {
            this.props.slidesArray.map((slide, index) =>
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
