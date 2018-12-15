import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import Speaking from '../components/Speaking'
import Reading from '../components/Reading'
import Elsewhere from '../components/Elsewhere'
import HomeSection from '../components/HomeSection'
import Projects from '../components/Projects'

import selfie from '../images/selfie.png' 

import { sortPosts } from '../components/utils.js'


class IndexPage extends React.Component {
  render() {
    const posts = sortPosts(this.props.data.allMarkdownRemark.edges);
    
    let bookNodes = {};
    bookNodes.finished = this.props.data.allGoodreadsBook.edges.filter( b =>
      b.node.shelfNames.includes('read')
    );
    bookNodes.reading = this.props.data.allGoodreadsBook.edges.filter( b =>
      b.node.shelfNames.includes('currently-reading')
    );
    
    return (
      <Layout>
        <div className="flex flex-row-ns flex-column ">
          <div className="w-40-ns">
            <img
              src={selfie}
              alt="Silhouette of a man standing at the top of a hill with silhouettes of mountains in the background. I like mountains because they offer great insights about life in general. Like: we're never quite sure of how tall are the mountains just over the ones that are nearest to us, all we have to do is keep climbing and taking care of our own pair of legs."
              className="parallax__layer--back absolute left-0 top-3-ns top-2 mt0-ns mt5 w-80 w-100-ns relative-ns"
            />

            <h1 className="f1-ns f2 fw9 dark-gray absolute lh-solid top-0 left-3-ns mt7-ns ml7-ns ml4 mt6 mw6-ns tl-ns tr">
              Designer of products and systems.
            </h1>
          </div> 

          <div className="w-10-ns" />

          <div className="w-40-ns mt7">
            <section id="about" className="mb4 mt6-ns mt7 f4 lh-copy dark-gray">
              <p>
                I'm a Designer interested in solving problems related to the human experience, our relation with technology and the tools we use to work and express ourselves. I'm in a journey to constantly improve a skill set that ranges from researching to designing and programming products and systems.
              </p>
              <p>
                I'm very curious and I'm always learning different stuff. I find it helps me stay creative, and give me knowledge to find the right problems to solve as well the right solutions for them.
              </p>
              <p>
                My background in Computer Science has biased towards solutions that are scalable, maintainable that stand the test of time. This mindset also applies to businesses and their role in the world. I work with purpose, and I like creating stuff that contribute to a more sustainable and equitable world.
              </p>
            </section>
          </div>
        </div>

        <div>
          <HomeSection title="Work">
            <div className="f5 pb4-ns pb2 mt2">
                I'm working as a Product Designer at{' '}
                <a
                  className="pretty-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.vtex.com/"
                >
                  VTEX
                  </a>
                , building the future of e-commerce in one of the biggest ecosystems in
                the world.
              <p>
                I've been contributing in a variety of teams and projects, always searching for a balance between the complexity of the systems, technology constraints and the needs of thousands of users that depend on our platform everyday to run their business.
              </p>
              
              <p>
                In my free time as a cicloactivist and I've built{' '}
                <a
                  className="pretty-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.bikedeboa.com.br/"
                >
                  bike de boa
                  </a>
                , a web app to help urban cyclists in Brazil.
              </p>
            </div>
          </HomeSection>

          <HomeSection title="Projects" fullScreen
            description="A selection of projects in which I've played a major role and I'm very proud of.">
            <Projects posts={posts}/> 
          </HomeSection> 
             
          <HomeSection
            title="Speaking"
            description="I try to be as engaged as possible with the community, always learning from others and  trying to share some ideas too."
          > 
            <Speaking />
          </HomeSection>

          {/* <HomeSection title="Currently">
            <p className="pretty-bullet">
              Listening to <b>Lorem</b>, <b>Ipsum</b>.
            </p> 

            <p className="pretty-bullet">
              Reading <b>Lorem</b>, <b>Ipsum</b> and <b>Dolor</b>.
            </p>
          </HomeSection> */}

          <HomeSection 
            title="Reading"
            description={(
              <span> 
                Reading good books is like always having good companies and being mentored by the best. This is what I'm currently reading, according to 
                <a
                 className="pretty-link ml1"
                 href="https://www.goodreads.com/cmdalbem"
                 target="_blank"
                 rel="noopener noreferrer">
                 Goodreads
                </a>.
              </span>
            )}
          >
            <Reading bookNodes={bookNodes} />
          </HomeSection>

          <HomeSection title="Elsewhere">
            <Elsewhere />
          </HomeSection>

        </div>
      </Layout>
    );
  } 
}

export default IndexPage;

export const pageQuery = graphql`
         query {
           allGoodreadsBook(filter: {shelfNames: {in: ["read","currently-reading"]}}) {
            edges {
              node {
                shelfNames
                book {
                  link
                  title
                  imageUrl
                  authors {
                    name
                  }
                }
              }
            }
          },
           allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
             edges {
               node {
                 excerpt
                 fields {
                   slug
                 }
                 frontmatter {
                   date
                   date2
                   title
                   description
                   tags
                   cover {
                     publicURL
                   }
                   forceOrder
                 }
               }
             }
           }
         }
       `