import React from 'react';
import LinkIcon from '../../assets/images/icons/link-icon.svg'
import StarIcon from '../../assets/images/icons/star-icon.svg'
import ForkIcon from '../../assets/images/icons/fork-icon.svg'
import moment from 'moment';


function Repository({name, description, language, updated, forkCount, starCount, url}) {
  return (
    <a href={url} className="repository" target="_blank" rel="noopener noreferrer">
      <h2 className="repository-name">{name}</h2>
      <p className="repository-desc" dangerouslySetInnerHTML={{__html: description}} />
      <div className="repository-footer">
        <div className="repository-count_wrapper">
          <span className="repository-count">
            <img className="repository-count_icon" src={StarIcon} alt="" aria-hidden="true" />
            {starCount.toLocaleString()}
          </span>
          <span className="repository-count">
            <img className="repository-count_icon" src={ForkIcon} alt="" aria-hidden="true" />
            {forkCount.toLocaleString()}
          </span>
        </div>
        {language &&
          <div className="repository-language">
            <span className="repository-language_icon" style={{backgroundColor: language.color}}></span>
            {language.name}
          </div>
        }
        <span className="repository-updated">
          Updated&nbsp;
          {moment(updated, 'YYYY-MM-DDTHH:mm:ssZ').fromNow()}
        </span>
      </div>
      <img className="repository-link-icon" src={LinkIcon} alt="" aria-hidden="true" />
    </a>
  )
}

export default Repository;