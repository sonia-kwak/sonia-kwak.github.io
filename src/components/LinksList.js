import React from 'react'

const LinksList = props => {
  const { items } = props;
  const classes = 'animatable link dim db mb4-ns mb2 text-gradient-clip';

  if (!items || !items.map) {
    return null;
  }

  return (
    <div className="f3 fw2">
      {
        items.map( (l, i) =>
          <a
            className={`${classes} bg-gradient-${i+1}`}
            target="_blank"
            rel="noopener noreferrer"
            href={l.url}
          >
            {l.label} 
          </a>
        )
      }
    </div>
  )
}

export default LinksList