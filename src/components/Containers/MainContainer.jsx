import React from 'react'

function MainContainer({children , className , ...props}) {
  return (
    <div className={`flex min-h-screen w-full ${className}`} {...props}>
        {children}
    </div>
  )
}

export default MainContainer