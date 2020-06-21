import React from 'react'

const LinksList = props => {
  const { items } = props;
  // const classes = 'animatable link dim db text-gradient-clip bb b--black-10';
  const classes = 'animatable link dim db text-gradient-clip';

  if (!items || !items.map) {
    return null;
  }

  return (
    <div className="f3 fw2">
      {
        items.map( (l, i) =>
          <a
            className={`${classes} bg-gradient-${i+1} ${i===0 ? 'pb3-ns pb2' : 'pv3-ns pv2'}`}
            target="_blank"
            rel="noopener noreferrer"
            href={l.url}
            key={l.label}
          >
            {l.label} 
          </a>
        )
      }
    </div>
  )
}

export default LinksList