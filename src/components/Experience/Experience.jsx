import React from 'react'
import "../Experience/Experience.css"
import Card from 'react-bootstrap/Card';
const Experience = () => {
  return (
    <div>
      <div className='e-main'>
      <div className='t-main'>
      <h2>Experience:</h2>
      <h6>There are technologies I`ve with worked:</h6>
      </div>
      <div className='r-main'>
      <Card className='card' style={{ width: '14rem', height: "300px", boxShadow: " 0px 3px 3px orange" }}>
      <Card.Img style={{padding: "10px", width: "220px"}} variant="top" src="https://img.icons8.com/color/512/html-5--v1.png"/>
        <Card.Title style={{textAlign: "center"}}>HTML</Card.Title>
        </Card>
        <Card className='card'  style={{ width: '14rem' , height: "300px", boxShadow: " 0px 3px 3px blue" }}>
        <Card.Img style={{padding: "40px", width: "220px"}} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png"/>
     <Card.Title style={{textAlign: "center"}}>CSS</Card.Title>
        </Card>
        <Card className='card'  style={{ width: '14rem',  height: "300px", boxShadow: " 0px 3px 3px yellow" }}>
        <Card.Img variant="top" src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png"/>
    
    <Card.Title style={{textAlign: "center"}}>JS, Native JS</Card.Title>
        </Card>
        <Card className='card'  style={{ width: '14rem',  height: "300px", boxShadow: " 0px 3px 3px lightblue" }}>
      <Card.Img style={{padding: "30px", width: "220px"}} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
     
        <Card.Title style={{textAlign: "center", marginTop: "20px"}}>React</Card.Title>
    </Card>
    </div>
    <div className='l-main'>
    <Card className='card'  style={{ width: '14rem',  height: "300px",  boxShadow: " 0px 3px 3px blue" }}>
      <Card.Img style={{padding: "30px", width: "220px"}} variant="top" src="https://mui.com/static/logo.png"/>
     
        <Card.Title style={{textAlign: "center", marginTop: "20px"}}>MiU</Card.Title>
    </Card>
    <Card className='card'  style={{ width: '14rem',  height: "300px",  boxShadow: " 0px 3px 3px purple" }}>
      <Card.Img style={{padding: "30px", width: "220px"}} variant="top" src="https://www.saashub.com/images/app/service_logos/196/6ve3ytysvsem/large.png?1638255215"/>
     
        <Card.Title style={{textAlign: "center", marginTop: "20px"}}>Bootstrap</Card.Title>
    </Card>
    <Card className='card'  style={{ width: '14rem',  height: "300px",  boxShadow: " 0px 3px 3px black" }}>
      <Card.Img style={{padding: "30px", width: "220px"}} variant="top" src="https://cdn.icon-icons.com/icons2/509/PNG/512/Github_icon-icons.com_49946.png"/>
     
        <Card.Title style={{textAlign: "center", marginTop: "20px"}}>Git</Card.Title>
    </Card>
  
    </div>
      </div>
      
    </div>
    
  )
}

export default Experience