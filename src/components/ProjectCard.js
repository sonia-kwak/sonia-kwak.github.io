import React from 'react'
import { Link } from 'gatsby'

import Tag from '../components/Tag.js'

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
                // className="b--light-gray ba bg-white br0 db near-black overflow-hidden card-shadow card-hover pa3"
                className="b--light-gray bg-white br0 db near-black overflow-hidden card-shadow card-hover"
                // className="link dim near-black db br1 overflow-hidden"
                to={post.fields.slug}
            >
                {
                    <div
                        className="w-100 db card-cover-height pv6-ns pv5 cover" 
                        style={ post.frontmatter.cover && {
                            backgroundImage: `url(${post.frontmatter.cover.publicURL})`,
                            backgroundPosition: 'center'
                        }}
                    ></div>
                }

                <div className="ph3 pv4">
                {/* <div className="pv3"> */}
                    {
                        post.frontmatter.title
                        &&
                        <h3 className="f5 fw7 mt0 mb1">
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

                    <div className="f6 mv1 gray">
                        {dateStart} {dateEnd && `– ${dateEnd}`}
                    </div>

                    {
                        post.frontmatter.tags &&
                        <div className="flex flex-row flex-wrap">
                            {post.frontmatter.tags.map(tag => (
                                <Tag>
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                    }
                    
                    {/* <p dangerouslySetInnerHTML={{ __html: post.excerpt }} /> */}
                </div>
            </Link>
        )
    }
}

export default ProjectCard;