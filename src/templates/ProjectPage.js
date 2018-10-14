import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'

import rehypeReact from "rehype-react"

import Layout from '../components/Layout'

// import Scrollspy from 'react-scrollspy'

class ProjectPage extends React.Component {
  // constructor(props) {
  //   super(props);
    
  //   this.initScrollListener();
  // }

  // initScrollListener() {
  //   document.addEventListener('scroll', function() {
  //     let h = document.documentElement,
  //       b = document.body,
  //       st = 'scrollTop',
  //       sh = 'scrollHeight',
  //       progress = document.querySelector('.reading-progress'),
  //       scroll;
 
  //     scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
  //     progress.style.setProperty('--scroll', scroll + '%')
  //   })
  // }

  render() {
    const post = this.props.data.markdownRemark
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const readingTime = post.fields.readingTime; 

    console.log(post);

    const margins = 'mh7';
    const base = 'f5 dark-gray lh-copy';

    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        h1: props => (
          <h1 className={`f1 tracked-tight fw1 dark-gray mt4 mb3 ${margins}`}>{props.children}</h1>
        ),
        h2: props => (
          <h2 className={`f2 dark-gray fw8 mt5 mb4 ${margins}`}>{props.children}</h2>
        ),
        h3: props => (
          <h3 className={`f3 dark-gray fw7 mt4 mb3 ${margins}`}>{props.children}</h3>
        ),
        p: props => (
          <p className={`mt0 ${base} ${margins}`}>{props.children}</p>
        ),
        ul: props => (
          <ul className={`${base} ${margins}`}>{props.children}</ul>
        ),
        a: props => (
          <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            // className="link blue dim"
            className="link blue dim"
          >
            {props.children}
          </a>
        ), 
        hr: props => (
          <hr className="mv6 bt-0 bb b--black-10" />
        ),
        figure: props => (
          <figure className="mv6 mh6">{props.children}</figure>
        )
      },
    }).Compiler;
    
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title}`}
        />

        {/* <div className="fixed top-0">
          <Scrollspy 
            items={['section-1', 'section-2', 'section-3']}
            // componentTag='div'
            currentClassName="fw6"
          >
            <li><a href="#section-1">section 1</a></li>
            <li><a href="#section-2">section 2</a></li>
            <li><a href="#section-3">section 3</a></li>
          </Scrollspy>
        </div> */}

        {/* Cover image */}
        <div className="flex flex-row-ns flex-column mb4">
          <div className="w-100">
            {
              post.frontmatter.cover &&
              <img className="w-100" alt="" src={post.frontmatter.cover.publicURL} />
            }
          </div>
        </div>

        {/* Heading */}
        <div className="flex flex-row-ns flex-column mb4">
          <div className="w-10-ns">
          </div>

          <div className="w-80-ns">
            <h1 className="f-subheadline fw9 mb3 dark-gray lh-solid">
              {post.frontmatter.title}
            </h1>

            <div className="f3 gray">
              <div>
                {post.frontmatter.date}
              </div>
              <div>
                {readingTime.text}
              </div>
            </div>

            <div className="f5 gray mt0">
              {
                post.frontmatter.tags &&
                <div className="mv2">
                  {post.frontmatter.tags.map(tag => (
                    <span className="br2 bg-near-white dark-gray f7 mr2 pa1">
                      {tag}
                    </span>
                  ))}
                </div>
              }
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-column">
          {
            post.frontmatter.description &&
            <div className={`${margins} f2 mv4 dark-gray lh-title`}>
              {post.frontmatter.description}
            </div>
          }

          { renderAst(post.htmlAst) }
        </div> 
        
        {/* Footer */}
        <div className="flex flex-row-ns flex-column mv6">
          <div className="w-10-ns">
          </div>

          <div className="w-80-ns">
            <hr />

            <div className="flex flex-row justify-between mt4">
              <div>
                {
                  previous &&
                  <Link className="pretty-link" to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                }
              </div> 
              <div>
                {
                  next &&
                  <Link className="pretty-link" to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
              </Link>
                }
              </div>
            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default ProjectPage

export const pageQuery = graphql`
         query BlogPostBySlug($slug: String!) {
           markdownRemark(fields: { slug: { eq: $slug } }) {
             id
             excerpt
             htmlAst
             frontmatter {
               title
               description
               date(formatString: "MMMM, YYYY")
               date2(formatString: "MMMM, YYYY")
               tags
               cover {
                 publicURL
               }
             }
             fields {
               readingTime {
                 text
               }
             }
           }
         }
       `