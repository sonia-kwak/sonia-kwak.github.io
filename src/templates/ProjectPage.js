import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'

import rehypeReact from "rehype-react"

import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// import Scrollspy from 'react-scrollspy'

class ResultsBanner extends React.Component {
  static defaultProps = {
    data: {},
  }

  render() {
    const dataObj = JSON.parse(this.props.data);

    return (
      <div className="vw-100 nl4 nr4 mv6 pa6 bg-near-white flex flex-row justify-around">
        {
          Object.keys(dataObj).map ( i => (
            <div>
              <div className="f1 fw1 mt0">
                {dataObj[i]}
              </div>
              <div className="f6 gray ttu mb0 tracked">
                {i}
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

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

    const defaultMargins = 'mh2 mh4-m mh7-ns';
    const base = 'f5 dark-gray lh-copy';

    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        h1: props => (
          <h1 className={`f1 tracked-tight fw1 dark-gray mt4 mb3 ${defaultMargins}`}>
            {props.children}
          </h1>
        ),
        h2: props => (
          <h2 className={`f2 dark-gray fw8 mt5 mb4 ${defaultMargins}`}>
            {props.children}
          </h2>
        ),
        h3: props => (
          <h3 className={`f3 dark-gray fw5 mt4 mb3 ${defaultMargins}`}>
            {props.children}
          </h3>
        ),
        p: props => (
          <p className={`mt0 ${defaultMargins}`}>
            {props.children
          }</p>
        ),
        blockquote: props => (
          <div className={`mt0 ml4 mv4 f4 lh-title `} style={{textIndent: '-.5em'}}>
            {props.children}
          </div>
        ),
        ul: props => (
          <ul className={`${defaultMargins}`}>
            {props.children}
          </ul>
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
        ),
        "video-container": props => (
          <div className={`mv6 mh6 flex flex-row-ns flex-column`}> 
            {props.children}
          </div>
        ),
        "results-banner": ResultsBanner,
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
              post.frontmatter.cover ?
                <img className="w-100" alt="" src={post.frontmatter.cover.publicURL} />
                :
                <div className="w-100 h5 pv7 bg-silver"></div>
            }
          </div>
        </div>

        {/* Heading */}
        <div className="flex flex-row-ns flex-column mt6 mb7 ">
          <div className="w-10-ns"></div>
          <div className="w-20-ns"> 
            <h1 className="f1 mt0 fw9 mb3 dark-gray lh-solid">
              {post.frontmatter.title}
            </h1>
          
            <div className="f5 gray">
              <div>
                {post.frontmatter.date}
                { post.frontmatter.date2 && 
                  ` – ${post.frontmatter.date2}`
                }
              </div>
            </div>
          </div>

          <div className="w-10-ns">
          </div>

          <div className="w-50-ns">
            {
              post.frontmatter.description &&
              <div className={`f3 dark-gray lh-copy`}>
                {post.frontmatter.description}
              </div>
            }

            <div className="mv3">
              {
                post.frontmatter.tags &&
                <div>
                  {post.frontmatter.tags.map(tag => (
                    <span className="br2 bg-light-gray dark-gray f6 mr2 pa1">
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
          <div className={`${base} ${defaultMargins} gray`}>
            {readingTime.text}.
          </div>

          <div className={base}>
            { renderAst(post.htmlAst) }
          </div>
        </div> 
        
        {/* Footer */}
        <div className="flex flex-row-ns flex-column mv6">
          <div className="w-10-ns">
          </div>

          <div className="w-80-ns">
            <div className="w-100 tc f2 mv6">
              <h2>Other projects</h2>
            </div>

            <div className="flex flex-row justify-between mt4">
              <div className="w-40-ns">
                {
                  previous &&
                  <ProjectCard node={previous} />
                }
              </div> 

              <div className="w-10-ns"></div>

              <div className="w-40-ns">
                {
                  next &&
                  <ProjectCard node={next} />
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