import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div className="pv4 flex justify-between items-center">
    <h1 className="f4 fw5">
      <Link to="/" className="link dim near-black fw6">
        Cristiano Dalbem
      </Link>
    </h1>

    <div className="f7 dn db-ns">
      <a className="dark-gray ml4 ttu fw6 tab tab--selected" href="#about" >
        {/* <a className="dark-gray ml4 ttu fw6" href="#about" >  */}
        About Me
      </a>
      <a className="gray ml4 ttu fw6 tab tab--unselected" href="#work" >
        Work
      </a>
      {/* <a className="gray ml4 ttu fw6 tab tab--unselected" href="#projects" >
        Projects
      </a> */}
      <a className="gray ml4 ttu fw6 tab tab--unselected" href="#speaking" >
        Speaking
      </a>
      <a className="gray ml4 ttu fw6 tab tab--unselected" href="#elsewhere" >
        Elsewhere
      </a>
    </div>
  </div>
)

export default Header
