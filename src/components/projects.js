import React from 'react'

import ProjectCard from '../components/ProjectCard'

class Projects extends React.Component {
    render() {
        // const posts = this.props.posts.filter(i => !i.node.frontmatter.hide);
        const posts = this.props.posts;

        return (
            <div className="flex flex-wrap nl3-ns nr3-ns">
                {
                    posts.map(({ node }) => {
                        return (
                            <div className="w-50-ns ph3-ns mv5-ns w-50-m ph2-m mv4 w-100">
                                <ProjectCard node={node}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Projects;