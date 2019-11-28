import React from 'react'
import ErrorIcon from '../../assets/images/icons/error-icon.svg';
import { removeToken } from '../../utils';

function ErrorComponent() {
  removeToken();

  return ( 
    <div className="error" >
      <img src={ErrorIcon} alt="Error" aria-hidden={true} />
      <span>Something went wrong !</span>
      <div>Please <button type="button" className="submit-btn submit-btn--inverse" onClick={() => window.location.reload()}>Reload</button> the page!</div>
    </div>
  )
}

export default ErrorComponent