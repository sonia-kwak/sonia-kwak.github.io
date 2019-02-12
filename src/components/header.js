import React from 'react'
import { Link } from 'gatsby'

import Headroom from 'react-headroom'

import AnimateLoad from '../components/AnimateLoad'

import Scrollspy from 'react-scrollspy'

class Header extends React.Component {
  scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  render() {
    const { isHome, globalPadding} = this.props;

    let url;

    const containerClasses = isHome ? ` fixed-ns top-0 left-0 right-0 z-2 relative ` : '';

    if (typeof window !== `undefined`) {
      url = new URL(window.location.href);
    }
 
    const tabItemClasses = 'ml4 ttu pa0 fw6 pointer bg-transparent outline-0 bn tab tab--unselected';
    let sections = [
      'About',
      'Work',
      'Projects',
      'Speaking',
      'Reading',
      'Elsewhere'
    ];
    const sectionsSlugs = sections.map( section => section.toLowerCase() );
    
    return (
      <Headroom disable={isHome}>
        <div className={`${globalPadding} ${containerClasses} flex pt3 pb2 bg-white`}>
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
                    offset={-200}
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
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                      fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'
                      strokeLinejoin='round' className='feather feather-corner-left-up'>
                      <polyline points='14 9 9 4 4 9' />
                      <path d='M20 20h-7a4 4 0 0 1-4-4V4' />
                    </svg> Back
                  </Link>
              }
            </div>
          </div>
        </div>
      </Headroom>
    );
  }
}

// export default Header
export default AnimateLoad(Header, { animation: 'slideDownWithDelay', duration: '1.5s'})
