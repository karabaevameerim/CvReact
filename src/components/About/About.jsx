import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import "../About/About.css"

const About = () => {
  const [ping, setPing] = useState(true);
  const change = ()=>{
    setPing(true)
  }
  return (
    <div className='main'>
          <h2 style={{padding:"20px"}}> About Me🙃</h2>
        <div className='a-main'>
      
        <div className='a-left'>
          {ping ? <Image onClick={()=> setPing(false)}  style={{width: "350px", border:"1px solid black"}} src='https://thumbs.dreamstime.com/b/%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D0%BE%D0%B9-%D0%BF%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D0%BD-%D1%81-%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%BE%D0%BC-%D1%84%D0%B0%D0%B9%D0%BB-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D1%85-%D0%B8-143790951.jpg'/>: <Image onClick={change} style={{width: "300px", border: "2px solid black"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6K99uDFQavbk6WCJrDulixMxAnk0FITDB8w&usqp=CAU'/>}
        </div>
        <div className='a-right'>
          <h3>Karabaeva Meerim</h3>
          <h4>NickName: Soul</h4>

       <h5>Age: 23 y.o.</h5>
       <p >Development for me is both a job and a hobby, so after study time I do self-development and watch different videos on YouTube, and also look at what's new in the IT world. I want to delve into this area and develop further in it. Right now I'm only learning JS, but I'm also going to learn the backend in the future to become a full-stack developer.</p>
        </div>
       
    </div>
    </div>
    
  )
}

export default About

