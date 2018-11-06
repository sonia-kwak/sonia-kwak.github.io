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
    // const { isHome } = this.props;
    // console.log('this.props', this.props);
    // console.log('isHome (Header)', isHome);

    let isHome, url, isPreview;

    if (typeof window !== `undefined`) {
      isHome = window.location.pathname === '/';
      
      url = new URL(window.location.href);
      isPreview = url.searchParams.get("preview");
    }
 
    const tabItemClasses = 'ml3 ttu fw6 pointer bg-transparent outline-0 bn tab tab--unselected';
    let sections = [
      'About',
      'Work'
    ];
    if (isPreview) {
      sections.push('Projects');
    }
    sections = sections.concat(
      [
        'Speaking',
        'Elsewhere'
      ]
    );
    const sectionsSlugs = sections.map( section => section.toLowerCase() );
    
    return (
      <div className='flex pv4'>
        <div className="w-100 flex justify-between items-center">
          <h1 className="f4 fw5">
            <Link to="/" className="link dim near-black fw6">
              Cristiano Dalbem
            </Link>

            {/* {
              isHome ?
                <Link to="/" className="link dim near-black fw6">
                  Cristiano Dalbem
                </Link>
                :
                <Link to="/" className="link dim near-black fw6 blue">
                  ← Back
                </Link>
            } */}
          </h1>
       
          <div className={`${isHome && 'f7 dn db-ns'}`}>
            { 
              isHome ? 
                <Scrollspy
                  items={sectionsSlugs}
                  componentTag="div"
                  currentClassName="tab--selected"
                  offset={200}
                >
                  {
                    sections.map( section => (
                      <button
                        className={tabItemClasses} 
                        onClick={() => this.scrollToSection(section.toLowerCase())}
                        key={section}
                      >
                        {section}
                      </button>
                    ))
                  }
                </Scrollspy>
                :
                <Link to="/" className="link dim near-black fw6 blue">
                  ← Back
                </Link>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Header
