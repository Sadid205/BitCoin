import React from 'react'

const CoinBtn = ({buttonText}) => {
  return (
    <div>
        <button className='w-20 h-8 border hover:bg-blue-500'>{buttonText}</button>
    </div>
  )
}

export default CoinBtn