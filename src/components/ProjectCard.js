import React from 'react'
import { Link } from 'gatsby'

class ProjectCard extends React.Component {
    render() {
        const node = this.props.node;

        return (
            <Link
                className="b--light-gray ba bg-white br1 db near-black overflow-hidden card-shadow"
                // className="link dim near-black db br1 overflow-hidden"
                to={node.fields.slug}
            >
                {
                    <div
                        className="w-100 db card-cover-height pv5 cover bg-gray" 
                        style={ node.frontmatter.cover && {
                            backgroundImage: `url(${node.frontmatter.cover.publicURL})`,
                            backgroundPosition: 'center'
                        }}
                    ></div>
                }

                <div className="ph3 pv2">
                {/* <div className=""> */}
                    {
                        node.frontmatter.title
                        &&
                        <h3 className="f5 fw7 mt3 mb1">
                            {node.frontmatter.title}
                        </h3>
                    }

                    {
                        node.frontmatter.description
                        &&
                        <div className="f6 gray">
                            {node.frontmatter.description}
                        </div>
                    }
                    
                    <div className="f6 mv3 gray">
                        {node.frontmatter.date} {node.frontmatter.date2 && `– ${node.frontmatter.date2}`}
                    </div>
                    
                    {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                </div>
            </Link>
        )
    }
}

export default ProjectCard;