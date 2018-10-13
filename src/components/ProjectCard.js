import React from 'react'
import { Link } from 'gatsby'

class ProjectCard extends React.Component {
    render() {
        const node = this.props.node;

        return (
            <Link
                className="project-card near-black bg-white db br1 overflow-hidden"
                to={node.fields.slug}
            >
                {
                    node.frontmatter.cover ? 
                    <div className="w-100 db">
                        <img alt="" src={node.frontmatter.cover.publicURL} />
                    </div>
                    :
                    <div className="bg-gray w-100 pa5 db" />
                }

                <div className="pa3">
                    {
                        node.frontmatter.title
                        &&
                        <h3 className="f5 fw7 mt3 mb0">
                            {node.frontmatter.title}
                        </h3>
                    }

                    {
                        node.frontmatter.description
                        &&
                        <div className="f6 dark-gray">
                            {node.frontmatter.description}
                        </div>
                    }
                    
                    <div className="f6 mv2 gray">
                        {node.frontmatter.date} {node.frontmatter.date2 && `— ${node.frontmatter.date2}`}
                    </div>
                    
                    {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                </div>
            </Link>
        )
    }
}

export default ProjectCard;