import React from 'react'
import { Link } from 'gatsby'

import { formatDate } from '../components/utils.js'

class ProjectCard extends React.Component {
    render() {
        const post = this.props.node;

        let dateStart = formatDate(post.frontmatter.date, 'YYYY');
        let dateEnd = formatDate(post.frontmatter.date2, 'YYYY');
        if (dateEnd && dateEnd === dateStart) {
            dateEnd = null;
        }

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
                        <div className="flex flex-row flex-wrap">
                            {post.frontmatter.tags.map(tag => (
                                <span className="br2 bg-near-white dark-gray f7 mr2 mt2 pa1">
                                {/* <span className="br2 ba b--light-gray dark-gray f7 mr2 mt2 pa1"> */}
                                    {tag}
                                </span>
                            ))}
                        </div>
                    }
                    
                    <div className="f6 mv3 gray">
                        {dateStart} {dateEnd && `– ${dateEnd}`}
                    </div>
                    
                    {/* <p dangerouslySetInnerHTML={{ __html: post.excerpt }} /> */}
                </div>
            </Link>
        )
    }
}

export default ProjectCard;