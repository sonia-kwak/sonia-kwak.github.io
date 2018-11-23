import React from 'react'
import { Link } from 'gatsby'

import Scrollspy from 'react-scrollspy'

class ArticleNav extends React.Component {
  scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  constructor(props) {
    super(props)

    this.state = props;
  }

  render() {
    const tabItemClasses = 'ml3 ttu fw6 pointer bg-transparent outline-0 bn tab tab--unselected';
    const sections = this.state.sections;
    const sectionsSlugs = sections.map( section => section.toLowerCase() );
    
    return (
      <div style={{ position: 'sticky', top: '4rem', left: 0 }}>
        { 
          <div className="flex flex-column">
            <Scrollspy
              items={sectionsSlugs}
              componentTag="div"
              currentClassName="fw7 dark-gray"
              offset={200}
            >
              {
                sections.map( section => (
                  <button
                    className={'bn bg-transparent tl gray mv2 f6 pointer dim db'} 
                    onClick={() => this.scrollToSection(section.toLowerCase())}
                    key={section}
                  >
                    {section}
                  </button>
                ))
              }
            </Scrollspy>
          </div>
        }
      </div>
    );
  }
}

export default ArticleNav
