import React from 'react'

function SubContainer({children , className , ...props}) {
  return (
    <div className={`adjustMargin px-3 ${className}`} {...props}>
        {children}
    </div>
  )
}

export default SubContainer