import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { StoryProject } from '../components/StoryProject'

 const Example = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  return (

    <div>
    
    <StoryProject/>
    <StoryProject/>
    <StoryProject/>
    <StoryProject/>
  </div>
    )
}

export default Example;

