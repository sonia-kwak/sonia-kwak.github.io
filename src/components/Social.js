import React from 'react'

import LinksList from './LinksList'

const Social = () => {
  const items = [
    {
      label: 'LinkedIn',
      url: "https://www.linkedin.com/in/cmdalbem/"
    },
    {
      label: 'Email',
      url: "mailto:cristiano.dalbem@gmail.com"
    },
    {
      label: 'Instagram',
      url: "https://www.instagram.com/cmdalbem/"
    },
    {
      label: 'Twitter',
      url: "https://twitter.com/cmdalbem"
    },
    {
      label: 'GitHub (code)',
      url: "https://github.com/cmdalbem/"
    },
    {
      label: 'Goodreads (books)',
      url: "https://www.goodreads.com/cmdalbem"
    },
    {
      label: 'Letterboxd (movies)',
      url: "https://letterboxd.com/cmdalbem/"
    }
  ];

  return (
    <LinksList items={items}/>
  )
}

export default Social