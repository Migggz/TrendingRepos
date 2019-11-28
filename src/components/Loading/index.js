import React from 'react'
import spinner from '../../assets/images/icons/loading-spinner.svg'
function Loading() {
 return (
    <div className="loading">
      <img src={spinner} alt="" aria-hidden="true" />
    </div>
 )
}

export default Loading