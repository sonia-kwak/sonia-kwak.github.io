import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'

import rehypeReact from "rehype-react"

import Layout from '../components/layout'

const PrimaryTitle = props => (
  <h1 className="f2 dark-gray mt4 mb4">{props.children}</h1>
);

const SecondaryTitle = props => (
  <h2 className="f3 dark-gray fw9 mt5 mb4">{props.children}</h2>
)

const TertiaryTitle = props => (
  <h3 className="f4 dark-gray fw9 mt5 mb3">{props.children}</h3>
)

const Paragraph = props => (
  <p className="f5 dark-gray">{props.children}</p>
)

// const Image = props => (
//   <img 
//     className="mv6"
//     alt={props.alt}
//     src={props.src}
//   >
//     {props.children}
//   </img>
// );

const StyledLink = props => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    className="link blue"
  >
    {props.children}
  </a>
)

const Separator = props => (
  <hr className="mv6 bb b--black-10"/>
);

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const readingTime = post.fields.readingTime; 
    // post.html = post.html.replace(/<img class="/g,`<img class="mv6 `);

    console.log(post);

    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        h1: PrimaryTitle,
        h2: SecondaryTitle,
        h3: TertiaryTitle,
        hr: Separator,
        p: Paragraph,
        a: StyledLink,
        // img: Image,
      },
    }).Compiler


    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title}`}
        />

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

          <div className="w-40-ns">
            <h1 className="f1 fw9 mb0 dark-gray lh-title">
              {post.frontmatter.title}
            </h1>

            <div className="f5 gray">
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
              <div>
                {post.frontmatter.date}
              </div> 
              <div>
                {readingTime.text}
              </div> 
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-row-ns flex-column">
          <div className="w-20-ns">
          </div>
  
          <div className="w-40-ns">
            <div className="lh-copy"> 
              { renderAst(post.htmlAst) }
            </div>
          </div>
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

export default BlogPostTemplate

export const pageQuery = graphql`
         query BlogPostBySlug($slug: String!) {
           markdownRemark(fields: { slug: { eq: $slug } }) {
             id
             excerpt
             htmlAst
             frontmatter {
               title
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