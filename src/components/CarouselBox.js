import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../pictures/img1.jpg';
import img2 from '../pictures/img2.jpg';
import img3 from '../pictures/img3.jpg';
import img4 from '../pictures/img4.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            width={400}
            height={750}
            className='d-block w-100'
            src={ img2 }
            alt='img1'
          />
          <Carousel.Caption>
            <h3>Perfect is in a simple</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            width={400}
            height={750}
            className='d-block w-100'
            src={ img1 }
            alt='img2'
          />
          <Carousel.Caption>
            <h3>Perfect is in a simple</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            width={400}
            height={750}
            className='d-block w-100'
            src={ img3 }
            alt='img3'
          />
          <Carousel.Caption>
            <h3>Perfect is in a simple</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            width={400}
            height={750}
            className='d-block w-100'
            src={ img4 }
            alt='img4'
          />
          <Carousel.Caption>
            <h3>Perfect is in a simple</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
