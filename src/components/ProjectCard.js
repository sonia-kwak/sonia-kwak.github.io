import React from 'react'
import { Link } from 'gatsby'

class ProjectCard extends React.Component {
    render() {
        const post = this.props.node;

        return (
            <Link
                className="b--light-gray ba bg-white br1 db near-black overflow-hidden card-shadow"
                // className="link dim near-black db br1 overflow-hidden"
                to={post.fields.slug}
            >
                {
                    <div
                        className="w-100 db card-cover-height pv5 cover bg-gray" 
                        style={ post.frontmatter.cover && {
                            backgroundImage: `url(${post.frontmatter.cover.publicURL})`,
                            backgroundPosition: 'center'
                        }}
                    ></div>
                }

                <div className="ph3 pv2">
                {/* <div className=""> */}
                    {
                        post.frontmatter.title
                        &&
                        <h3 className="f5 fw7 mt3 mb1">
                            {post.frontmatter.title}
                        </h3>
                    }

                    {/* {
                        post.frontmatter.description
                        &&
                        <div className="f6 gray">
                            {post.frontmatter.description}
                        </div>
                    } */}

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
                    
                    <div className="f6 mv3 gray">
                        {post.frontmatter.date} {post.frontmatter.date2 && `– ${post.frontmatter.date2}`}
                    </div>
                    
                    {/* <p dangerouslySetInnerHTML={{ __html: post.excerpt }} /> */}
                </div>
            </Link>
        )
    }
}

export default ProjectCard;