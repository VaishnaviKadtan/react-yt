import React from 'react'
import Navbar from './Navbar'
import Page from './Page'


const Section1 = (props) => {
 
  
  return (
    <div className='h-screen w-full '>
        <Navbar/>
       <Page users={props.users} tag={props.tag}/>
      
    </div>
  )
}

export default Section1
