import React from 'react'
import "./Gridcontent.css"

export default function Gridcontent() {
  return (
    <>
        <div className='container'>

        <a href='./nave.js' className='dabba1'>
        <div className='fir' >
        <img src='./images/building.jpeg' alt='00'></img>        
            <h5>Architecure Details</h5>    
            <div className = "line"></div>   
            <p className='info'>This section conatains article related to architecture design parameters standard and architecture for designing ...</p>  
            <button className='btn btn-success'>Read More</button>       
          
        </div >
        </a>
        
        <a href='./nave.js' className='dabba1'>
        <div className='fir'>
        <img src='./images/building.jpeg' alt='00'></img>
            <h5>Building Construction</h5>    
            <div className = "line"></div>         
            <p className='info'>This section conatains article related to architecture design parameters standard and architecture for designing ...</p>
            <button className='btn btn-success'>Read More</button> 
        </div>
        </a>

        <a href='./nave.js' className='dabba1'>
        <div className='fir'>
        <img src='./images/building.jpeg' alt='00'></img>
            <h5>Interior Design  </h5> 
            <div className = "line"></div>           
            <p className='info'>This section conatains article related to architecture design parameters standard and architecture for designing ...</p>
            <button className='btn btn-success'>Read More</button> 
        </div>
        </a>

        <a href='./nave.js' className='dabba1'>
        <div className='fir'>
        <img src='./images/building.jpeg' alt='00'></img>
            <h5>Furniture Dimension</h5>            
            <div className = "line"></div> 
            <p className='info'>This section conatains article related to architecture design parameters standard and architecture for designing ...</p> 
            <button className='btn btn-success'>Read More</button> 
        </div>
        </a>

        </div>
    </>
  )
}
