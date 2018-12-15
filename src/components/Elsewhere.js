import React from 'react'

import LinksList from './LinksList'

const Speaking = () => {
  const items = [
    {
      label: 'GitHub',
      url: "https://github.com/cmdalbem/"
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
      label: 'Goodreads',
      url: "https://www.goodreads.com/cmdalbem"
    },
    {
      label: 'LinkedIn',
      url: "https://www.linkedin.com/in/cmdalbem/"
    },
    {
      label: 'Email',
      url: "mailto:cristiano.dalbem@gmail.com"
    }
  ];

  return (
    <LinksList items={items}/>
  )
}

export default Speaking