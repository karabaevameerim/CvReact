import React from 'react'
import "../Portfolio/Portfolio.css"
import Carousel from 'react-bootstrap/Carousel';
import cv from "../assets/image/cv.png"
import Cbook from "../assets/image/contactBook.png"
import pocList from "../assets/image/PocList.png"
import movie from "../assets/image/MovieList.png"
const Portfolio = () => {
  return (
    <div className='p-main'>
      <h2>Portfolio:</h2>
      <div className='p-car'>
      <Carousel variant="dark" style={{width: "800px"}}>
      <Carousel.Item>
       <a href="https://karabaevameerim.github.io/CV--PHOTOGRAPH--K.M/"> <img
          className="d-block w-100 h-500"
          src={cv}
          alt="First slide"
        /></a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://karabaevameerim.github.io/ContactBook/">
        <img
          className="d-block w-100 h-500"
          src={Cbook}
          alt="Second slide"
        />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://karabaevameerim.github.io/PocemonList/"><img
          className="d-block w-100"
          src={pocList}
          alt="Third slide"
        /></a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://karabaevameerim.github.io/movieList/"><img
          className="d-block w-100"
          src={movie}
          alt="Third slide"
        /></a>
      </Carousel.Item>
    </Carousel>
      </div>
      <div className='p-git'>
      <h5>My other Works</h5>
      <a href="https://github.com/karabaevameerim"><img style={{width: "50px"}} src="https://imgpng.ru/d/github_PNG40.png" alt="Git" /></a>
      </div>
    </div>
  )
}

export default Portfolio