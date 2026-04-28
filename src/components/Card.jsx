import React from 'react'

const Card = ({children, bg="bg-(--blue)"}) => {
  return (
    <div className={`${bg} text-2xl font-bold px-1 py-4 rounded-lg shadow-md text-(--white)`}>
        {children}
    </div>
  )
}

export default Card