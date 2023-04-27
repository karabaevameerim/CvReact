import React from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Home/Home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className='right'>
            <h1>I`m  JavaScript Developper</h1>
        <p>I have 4 month experience js developper and create style.I like work on web application using technologies like React, JS... and I like traveling and discovering something new</p>
        <Link to='/portfolio'>
        <Button>Portfolio</Button>
        </Link>
        <br />
        <div style={{display: "flex"}}>
        <a style={{paddingRight: "10px"}} href="https://instagram.com/krbv_mksh?igshid=ZDdkNTZiNTM="><img src='https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-icon-download-icons-12.png'/></a>
        <a style={{paddingRight: "10px"}}  href="#">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111819.png" alt="twt" />
       </a>
       <a style={{paddingRight: "10px"}}  href="#">
        <img src="https://img.icons8.com/ios/512/facebook--v1.png" alt="fb" />
       </a>
       <a style={{paddingRight: "10px"}}  href="https://github.com/karabaevameerim">
        <img src="https://imgpng.ru/d/github_PNG40.png" alt="git" />
       </a>
        </div>
       
      
        </div>
        <div className='left'>
        <Image className='img' src="https://i.ibb.co/hmcZPSk/me.jpg" 
        alt="me" />
        < Image className='img' src='https://i.ibb.co/3M1K3wm/me-1.jpg' alt='me'/>
        < Image className='img' src='https://i.ibb.co/qWK9sKd/me-2.jpg' alt='me'/>
        < Image className='img' src='https://i.ibb.co/ZMkSTxS/me-3.jpg' alt='me'/>
        < Image className='img' src='https://i.ibb.co/T0gBHDM/me-4.jpg' alt='me'/>
        < Image className='img' src='https://i.ibb.co/mbYHpnV/me-5.jpg' alt='me'/>

            </div>
        
    </div>
  )
}

export default Home