import React from 'react'
import { Card } from './Compenent/Card'


const ProjectCard = () => {
  return (
    <div className='lg:flex lg:justify-evenly content-center items-center block justify-center px-min-10 my-4 ' >
       <Card/>
       <Card/>
       <Card/>
    </div>
  )
}

export default ProjectCard
