import React from 'react'
import { useMediaQuery } from 'react-responsive'

 const Example = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  return <div>
    <h1>Device Test!</h1>
   {
       isMobile && <h1>isMobile</h1> 
   }
  </div>
}

export default Example;

