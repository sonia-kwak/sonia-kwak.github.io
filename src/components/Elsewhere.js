import React from 'react'

const Speaking = () => {
  const classes = 'link dim db mb4-ns mb2 text-gradient-clip';

  return (
    <div className="f4 fw2 mt2">
      <a
        className={`${classes} bg-gradient-1`}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/cmdalbem/"
      >
        GitHub
      </a>
      <a
        className={`${classes} bg-gradient-2`}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/cmdalbem/"
      >
        Instagram
      </a>
      <a
        className={`${classes} bg-gradient-3`}
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/cmdalbem"
      >
        Twitter
      </a>
      <a
        className={`${classes} bg-gradient-4`}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.goodreads.com/cmdalbem"
      >
        Goodreads
      </a>
      <a
        className={`${classes} bg-gradient-5`}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/cmdalbem/"
      >
        LinkedIn
      </a>
      <a
        className={`${classes} bg-gradient-6`}
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:cristiano.dalbem@gmail.com"
      >
        Email
      </a>
    </div>
  )
}

export default Speaking