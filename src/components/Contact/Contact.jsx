import React from 'react'
import { Button } from 'react-bootstrap'
import "../Contact/Contact.css"
const Contact = () => {
  return (
    <div className='c-main'>
      <div className='c-icon'>
       <a href="https://instagram.com/krbv_mksh?igshid=ZDdkNTZiNTM=">
        <img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-icon-download-icons-12.png" alt="inst" />
       </a>
       <a href="#">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111819.png" alt="twt" />
       </a>
       <a href="#">
        <img src="https://img.icons8.com/ios/512/facebook--v1.png" alt="fb" />
       </a>
       <a href="https://github.com/karabaevameerim">
        <img src="https://imgpng.ru/d/github_PNG40.png" alt="git" />
       </a>

      </div>
      <div className='c-text'>
      <h2>Contact</h2>
      <p>I would like to work with you. Contact me .Thank you!</p>
      </div>
      <div className='c-input'>
        <input type="text" placeholder='name'/>
        <input type="text" placeholder='email'/>
        <input style={{height: "300px", padding: "0px 0px 270px 0px", paddingLeft:"8px"}} type="text" placeholder='Message form...'/>
        <Button>Send</Button>
      </div>
    </div>
  )
}

export default Contact