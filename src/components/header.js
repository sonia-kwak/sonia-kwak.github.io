import React from 'react'
import { Link } from 'gatsby'

import Scrollspy from 'react-scrollspy'

class Header extends React.Component {
  scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  render() {
    const tabItemClasses = 'ml3 ttu fw6 pointer bg-transparent outline-0 bn tab tab--unselected';
    const sections = [
      'About',
      'Work',
      'Projects',
      'Speaking',
      'Elsewhere'
    ];
    const sectionsSlugs = sections.map( section => section.toLowerCase() );

    return (
      <div className="pv4 flex">
        <div className="w-10-ns"></div>

        <div className="w-80 flex justify-between items-center">
          <h1 className="f4 fw5">
            <Link to="/" className="link dim near-black fw6">
              Cristiano Dalbem
            </Link>
          </h1>
      
          <div className="f7 dn db-ns">
            <Scrollspy
              items={sectionsSlugs}
              componentTag="div"
              currentClassName="tab--selected"
            >
              {
                sections.map( section => (
                  <button
                    className={tabItemClasses}
                    onClick={() => this.scrollToSection(section.toLowerCase)}
                    key={section}
                  >
                    {section}
                  </button>
                ))
              }
            </Scrollspy>
          </div>
        </div>
      </div>
    );
  }
}

export default Header
