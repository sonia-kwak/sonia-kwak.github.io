import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import Speaking from '../components/Speaking'
import Elsewhere from '../components/Elsewhere'
import HomeSection from '../components/HomeSection'
import Projects from '../components/Projects'

import selfie from '../images/selfie.png' 


class IndexPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    
    let url, isPreview;
    if (typeof window !== `undefined`) {
      url = new URL(window.location.href);
      isPreview = url.searchParams.get("preview");
    }

    return (
      <Layout>
        <div className="flex flex-row-ns flex-column ">
          <div className="w-10-ns" />

          <div className="w-30-ns">
            <img
              src={selfie}
              alt="Silhouette of a man standing at the top of a hill with silhoutes of mountains in the background. I like mountains because they offer great insights about life in general. Like: we're never quite sure of how tall are the mountains just over the ones that are nearest to us, all we have to do is keep climbing and taking care of our own pair of legs."
              className="parallax__layer--back absolute left-0 top-3 w-80 w-100-ns relative-ns"
            />

            <h1 className="f1-ns f2 fw9 dark-gray absolute lh-solid top-0 left-3 mt7-ns ml7-ns ml4 mt6 mw6-ns">
              Designer of products and systems.
            </h1>
          </div> 

          <div className="w-10-ns" />

          <div className="w-30-ns mt7">
            <section id="about" className="mb4 mt5-ns mt7 f5 dark-gray">
              <p>
                I'm a Designer focused in solving problems that are somewhere in the
                middle between people and their tools, with a skillset that ranges
                from researching to designing and programming products and systems.
              </p>
              <p>
                I’m curious about everything related to the human experience and our
                relation with technology. And I'm always learning, because to solve
                the right problems the right way demands a set of skills that goes
                beyond just digital tools.
              </p>
              <p>
                My background in Computer Science has biased me to design solutions
                that are scalable, maintainable and that stand the test of time. And
                I tend to extend this mindset to businesses and their role in the
                world, and I'm interested in creating stuff that contribute to a
                more sustainable and equitable world.
              </p>
            </section>
          </div>
        </div>

        <div>
          <HomeSection title="Work">
            <div className="pretty-bullet pb4-ns pb2">
              Working as a Product Designer at{' '}
              <a
                className="pretty-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.vtex.com/"
              >
                VTEX
                </a>
              , building the future in one of the biggest e-commerce ecosystems in
              the world.
              </div>

            <div className="pretty-bullet pb4-ns pb2">
              In my free time I'm a cicloactivist and I've built{' '}
              <a
                className="pretty-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.bikedeboa.com.br/"
              >
                bike de boa
                </a>
              , a web app to promote the cycling culture in Brazil.
            </div>
          </HomeSection>

          {
            isPreview &&
            <HomeSection title="Projects" fullScreen>
              <Projects posts={posts}/> 
            </HomeSection> 
          }
             
          <HomeSection
            title="Speaking"
            // description="I try to be as engaged as possible with the community, always learning from others and  trying to share some ideas too."
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
                 }
               }
             }
           }
         }
       `